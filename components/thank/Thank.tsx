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
  TextField,
  Typography,
} from "@mui/material";
import { getYourMindUpApi } from "@/api";
import { SendOutlined } from "@mui/icons-material";
import GradeIcon from "@mui/icons-material/Grade";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { blue, purple, yellow } from "@mui/material/colors";
import { UiContext } from "@/context";

type FormData = { body: string; isPrivate: boolean };

export function Thank() {
  const ws = useWebSocket();
  const { setOpenSnackbarSuccess, setOpenSnackbarError } = useContext(UiContext);
  const [thanks, setThanks] = useState<string[]>([]);
  const [isPrivate, setIsPrivate] = useState<boolean>(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();
  const onCreatePublication = async ({ body, isPrivate }: FormData) => {
    try {
      const { data } = await getYourMindUpApi.post("/publications", { body, isPrivate });
      if (!isPrivate) {
        ws?.send(body);
      }
      setOpenSnackbarSuccess(true);
    } catch (error) {
      setOpenSnackbarError(true);
    }
  };

  const onMessage = useCallback((event: MessageEvent) => {
    const resp = event.data.text();
    const newThank = resp;
    setThanks((t) => [...t, newThank]);
  }, []);

  useEffect(() => {
    ws?.addEventListener("message", onMessage);
    return () => ws?.removeEventListener("message", onMessage);
  }, [onMessage, ws]);

  useEffect(() => {
    setValue("isPrivate", isPrivate);
  }, [setValue, isPrivate]);

  return (
    <Box
      component={"article"}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 200px)",
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

          <Grid item xs={12} textAlign={"center"}>
            <Button
              variant="contained"
              type="submit"
              endIcon={<SendOutlined sx={{ transform: "rotate(-25deg)" }} />}
            >
              I wanna thank for that today
            </Button>
          </Grid>
        </Grid>
      </form>
      <Box
        sx={{
          position: { xs: "relative", md: "absolute" },
          top: { xs: 10, md: 90 },
          left: { md: 28 },
        }}
        className="fadeIn"
      >
        {thanks?.map((thank) => (
          <Alert
            key={thank}
            icon={<GradeIcon sx={{ color: yellow[400] }} />}
            sx={{ borderRadius: "4% / 50%", backgroundColor: blue[100], color: "black", mb: 2 }}
            elevation={1}
          >
            <AlertTitle></AlertTitle>
            {thank} - <strong>A person in the world</strong>
          </Alert>
        ))}
        <Alert
          icon={<GradeIcon sx={{ color: yellow[400] }} />}
          sx={{ borderRadius: "4% / 50%", backgroundColor: blue[100], color: "black", mb: 2 }}
          elevation={1}
        >
          I thank you for the beautiful day today - <strong>A person in the world</strong>
        </Alert>
        <Alert
          icon={<GradeIcon sx={{ color: yellow[400] }} />}
          sx={{ borderRadius: "20px", backgroundColor: blue[100], color: "black", mb: 2 }}
          elevation={1}
        >
          I thank you for the beautiful day today - <strong>A person in the world</strong>
        </Alert>
        <Alert
          icon={<GradeIcon sx={{ color: yellow[400] }} />}
          sx={{ borderRadius: "20px", backgroundColor: blue[100], color: "black", mb: 2 }}
          elevation={1}
        >
          I thank you for the beautiful day today - <strong>A person in the world</strong>
        </Alert>
      </Box>
    </Box>
  );
}
