"use client";
import { useContext, useEffect, useState } from "react";
import {
  Alert,
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
import { RocketLaunchOutlined, SendOutlined } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { AuthContext, UiContext } from "@/context";
import { SideThanks } from "./sideThanks";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from "next/link";
import { useThanks } from "@/hooks/useThanks";


export function Thank() {
  const { user } = useContext(AuthContext);
  const {
    deleteThank,
    errors,
    handleSubmit,
    onCreatePublication,
    register,
    isPrivate,
    setIsPrivate,
    thankInStorage,
    thanks,
    isLoading,
    isModuleFinish,
    setIsModuleFinish,
  } = useThanks();



  const [showSideThanks, setShowSideThanks] = useState<boolean>(true);
  const [effectHide, setEffectHide] = useState<boolean>(false);


  const onHideSideThanks = () => {
    setEffectHide(true);
    setTimeout(() => {
      setEffectHide(false);
      setShowSideThanks(false)
    }, 700);
  }



  return (
    <Grid container spacing={2}>
      {
        showSideThanks ?
          (
            <Grid item
              xs={12}
              md={4}
              sx={{
                marginLeft: -2,
                mt: user ? -4.5 : { xs: 2, md: !user ? -7.5 : -10.1, lg: -4.5 },
                mb: { xs: 4, sm: 2, md: 0 }
              }}
              className={effectHide ? "slide-left" : "slide-right"}>
              <SideThanks thanks={thanks} onClick={onHideSideThanks} deleteThank={deleteThank} isLoading={isLoading} />
            </Grid>
          ) : (
            <IconButton sx={{ backgroundColor: 'primary.main', color: 'white' }} onClick={() => setShowSideThanks(true)} type="button" size="large">
              <ChevronRightIcon color="inherit" />
            </IconButton>

          )

      }
      <Grid item xs={12} md={showSideThanks ? 8 : 12}>
        {
          true ? (
            <Box
              component={"article"}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "calc(100vh - 150px)",
                gap: 4,
                mt: 4,
              }}
            >
              <Typography variant="h5" component="p">
                Congratulations! You have completed this module, we invite you to go to the next
              </Typography>
              <Grid textAlign={"center"}>
                <Button
                  variant="contained"
                  type="button"
                  href="/action"
                  endIcon={<RocketLaunchOutlined />}
                >
                  Next module
                </Button>
              </Grid>
              <Typography variant="h6" component="p">
                Or...
              </Typography>
              <Typography variant="h6" component="p">
                Do you want to say thanks again?
              </Typography>
              <Grid textAlign={"center"}>
                <Button
                  variant="contained"
                  type="button"
                  onClick={() => setIsModuleFinish(false)}
                >
                  Give thanks again
                </Button>
              </Grid>
            </Box>
          )
            : (
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
                <form onSubmit={handleSubmit((args) => onCreatePublication(args, !!user))} noValidate>
                  <Grid container spacing={2} alignContent={"center"} justifyContent={"center"}>
                    <Grid item xs={12}>
                      <TextField
                        id="outlined-multiline-static"
                        label="Give a thank"
                        multiline
                        minRows={4}
                        className="w-full"
                        {...register("body", {
                          required: "This field is required",
                        })}
                        variant="standard"
                        defaultValue={thankInStorage?.body || ''}
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
                        <Alert sx={{ mt: 1, }} severity="info"><Link href='/auth/login?p=/thanks'>Log In </Link> to continue enjoying this module - <Link href='/auth/login?p=/thanks'><strong> Log In</strong></Link> </Alert>
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
            )
        }
      </Grid>
    </Grid >
  );
}
