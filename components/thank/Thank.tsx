"use client";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useWebSocket } from 'next-ws/client';
import { Alert, AlertTitle, Box, Button, Chip, Grid, TextField, Typography } from "@mui/material";
import { getYourMindUpApi } from "@/api";
import { SendOutlined } from "@mui/icons-material";
import GradeIcon from '@mui/icons-material/Grade';

export function Thank() {
  const ws = useWebSocket();
  const [thanks, setThanks] = useState<string[]>([])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ body: string }>();

  const onCreatePublication = async ({ body }: { body: string }) => {
    const { data } = await getYourMindUpApi.post('/publications', { body });
    ws?.send(JSON.stringify({ newThank: body }))
  }

  const onMessage = useCallback((event: MessageEvent) => {
    const resp = JSON.parse(event.data)
    if (!resp?.newThank) return;
    const newThank = resp.newThank;
    setThanks(t => [...t, newThank]);
  }, []);

  useEffect(() => {
    ws?.addEventListener('message', onMessage);
    return () => ws?.removeEventListener('message', onMessage);
  }, [ws]);

  return (
    <Box
      component={"article"}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        width: "100%",
        padding: 4,
        border: "1px solid black",
        borderRadius: 4,
        boxShadow: "lg",
      }}
    >
      {
        thanks?.map(thank => (
          <Alert severity="info" key={thank}>
            <AlertTitle>A person in the world</AlertTitle>
            {thank} <strong></strong>
          </Alert>

        ))
      }
      <Box position={'absolute'} top={80} left={8}>

      <Alert icon={<GradeIcon />} color="primary">
        <AlertTitle>A person in the world</AlertTitle>
        I thank you for the beautiful day today<strong></strong>
      </Alert>
      </Box>
      <Typography variant="h3" component="h2">
        Thank for something
      </Typography>

      <Typography variant="h6" component="p">
        Give a thank for something that happened today that made you happy or that you are grateful
        for.
      </Typography>
      <form onSubmit={handleSubmit(onCreatePublication)} noValidate>
        <Grid container spacing={2} alignContent={'center'} justifyContent={'center'}>
          <Grid item xs={12} >

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

          <Grid item xs={12} textAlign={'center'} >
            <Button variant="contained" type="submit" endIcon={<SendOutlined sx={{ transform: 'rotate(-25deg)' }} />}>
              I wanna thank for that today
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
