"use client";

import { Box, Button, TextField, Typography } from "@mui/material";

export function Thank() {
  return (
    <Box
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

      <TextField
        id="outlined-multiline-static"
        label="Give a thank"
        multiline
        minRows={4}
        className="w-full"
      />

      <Button variant="contained" onClick={() => {}}>
        I wanna thank for that today
      </Button>
    </Box>
  );
}
