"use client";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useWebSocket } from 'next-ws/client';
import { Alert, AlertTitle, Box, Button, Chip, TextField, Typography } from "@mui/material";
import { getYourMindUpApi } from "@/api";

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
      <Typography variant="h3" component="h2">
        Thank for something
      </Typography>

      <Typography variant="h6" component="p">
        Give a thank for something that happened today that made you happy or that you are grateful
        for.
      </Typography>
      <form onSubmit={handleSubmit(onCreatePublication)} noValidate>

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

        <Button variant="contained" type="submit">
          I wanna thank for that today
        </Button>
      </form>
    </Box>
  );
}
