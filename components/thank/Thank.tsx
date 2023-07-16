"use client";

import { getYourMindUpApi } from "@/api";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function Thank() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{body: string}>();
  const onCreatePublication = async ({body}: {body:string}) => {
    const {data} = await getYourMindUpApi.post('/publications', {body});
    console.log(data);
  }
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
