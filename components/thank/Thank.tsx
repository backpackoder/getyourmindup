"use client";
import { useCallback, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useWebSocket } from "next-ws/client";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Checkbox,
  Chip,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { getYourMindUpApi } from "@/api";
import { SendOutlined } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { AuthContext, UiContext } from "@/context";
import { SideThanks } from "./sideThanks";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Link from "next/link";
import { FormData, Thank } from "./types";


export function Thank() {
  const ws = useWebSocket();
  const { setOpenSnackbarSuccess, setOpenSnackbarError } = useContext(UiContext);
  const { user } = useContext(AuthContext);
  const [thanks, setThanks] = useState<Thank[]>([]);
  const [isPrivate, setIsPrivate] = useState<boolean>(false);
  const [showSideThanks, setShowSideThanks] = useState<boolean>(true);
  const [effectHide, setEffectHide] = useState<boolean>(false);
  const [thankInStorage, setThankInStorage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const onCreatePublication = async ({ body, isPrivate }: FormData) => {

    if (!user) {
      localStorage.setItem('thank', JSON.stringify({ body, isPrivate }))
      setThanks([...thanks, { body, itWasMe: true }])
      return;
    }

    try {
      const { data } = await getYourMindUpApi.post("/publications", { body, isPrivate });
      if (!isPrivate) {
        ws?.send(body);
      }
      setThanks([...thanks, { body, itWasMe: true }])
      setOpenSnackbarSuccess(true);
    } catch (error) {
      setOpenSnackbarError(true);
    }
  };

  const onMessage = useCallback((event: MessageEvent) => {
    const resp = event.data.text();
    const newThank = resp;
    setThanks((t) => [...t, { body: newThank, itWasMe: false }]);
  }, []);

  useEffect(() => {
    setThankInStorage(localStorage.getItem('thank'));
    ws?.addEventListener("message", onMessage);
    return () => ws?.removeEventListener("message", onMessage);
  }, [onMessage, ws]);

  useEffect(() => {
    setValue("isPrivate", isPrivate);
  }, [setValue, isPrivate]);

  const onHideSideThanks = () => {
    setEffectHide(true);
    setTimeout(() => {
      setEffectHide(false);
      setShowSideThanks(false)
    }, 700);
  }

  return (
    <>
      {
        !user &&
        <Alert sx={{ mt: -3 }} severity="warning">You must register to enjoy all the features — <Link href='/auth/register?p=thanks'><strong> Sign Up</strong></Link> </Alert>
      }
      <Grid container spacing={2}>
        {
          showSideThanks ?
            (
              <Grid item md={4} display={'flex'} className={effectHide ? "slide-left" : "slide-right"}>
                <SideThanks thanks={thanks} />
                <Box
                  sx={{
                    // position: { xs: "relative", md: "absolute" },
                    // top: { xs: 10, md: 90 },
                    // left: { md: 28 },
                  }}
                  className="fadeIn"
                >

                  <IconButton sx={{ backgroundColor: '#008072', color: 'white' }} onClick={() => onHideSideThanks()} type="button" size="large">
                    <ChevronLeftIcon />
                  </IconButton>
                </Box>
              </Grid>
            ) : (
              <IconButton sx={{ backgroundColor: 'primary.main', color: 'white' }} onClick={() => setShowSideThanks(true)} type="button" size="large">
                <ChevronRightIcon color="inherit" />
              </IconButton>

            )

        }
        <Grid item md={showSideThanks ? 8 : 12}>
          <Box
            component={"article"}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "calc(100vh - 150px)",
              gap: 4,
            }}
          >
            <Typography variant="h3" component="h2">
              Thank for something
            </Typography>

            <Typography variant="h6" component="p">
              Give a thank for something that happened today that made you happy or that you are grateful
              for.
            </Typography>
            <form onSubmit={handleSubmit(onCreatePublication)} noValidate>
              <Grid container spacing={2} alignContent={"center"} justifyContent={"center"}>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Give a thank"
                    multiline
                    minRows={4}
                    className="w-full"
                    {...register("body", {
                      required: "Este campo es requerido",
                    })}
                    variant="standard"
                    defaultValue={thankInStorage || ''}
                    error={!!errors.body}
                    helperText={errors.body?.message}
                  />
                </Grid>
                <Grid item xs={12} textAlign={"center"}>
                  <Chip
                    label={isPrivate ? "Private thank you post" : "Public thank you post"}
                    clickable
                    color={isPrivate ? "primary" : "warning"}
                    variant="outlined"
                    onClick={() => setIsPrivate(!isPrivate)}
                    className="fadeIn"
                  />
                  <Checkbox
                    color={isPrivate ? "primary" : "warning"}
                    checked={isPrivate}
                    onChange={(e, idChecked) => setIsPrivate(idChecked)}
                    icon={<LockOpenIcon />}
                    checkedIcon={<LockIcon />}
                  />
                </Grid>

                {
                  thankInStorage && !user && (
                    <Alert sx={{ mt: 1, }} severity="info"><Link href='/auth/register?p=thanks'><strong> Sign Up</strong></Link> to continue enjoying this module - <Link href='/auth/register?p=thanks'><strong> Sign Up</strong></Link> </Alert>
                  )
                }
                <Grid item xs={12} textAlign={"center"}>
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={!!thankInStorage && !user}
                    endIcon={<SendOutlined sx={{ transform: "rotate(-25deg)" }} />}
                  >
                    I wanna thank for that today
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid >
    </>
  );
}
