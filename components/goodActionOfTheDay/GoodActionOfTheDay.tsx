"use client";

import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

export function GoodActionOfTheDay() {
  const [hasClicked, setHasClicked] = useState(false);

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
        The good action to realize for today is...
      </Typography>

      <Box
        sx={{
          backgroundColor: "rgb(240,240,240)",
          py: 2,
          px: 4,
          border: "1px solid black",
          borderRadius: 4,
          boxShadow: "lg",
        }}
      >
        <Typography variant="h4" component="p">
          Make a new friend
        </Typography>
      </Box>

      {hasClicked ? (
        <Comment setHasClicked={setHasClicked} />
      ) : (
        <Button variant="contained" onClick={() => setHasClicked(true)}>
          I did it!
        </Button>
      )}
    </Box>
  );
}

type CommentProps = {
  setHasClicked: (value: boolean) => void;
};

function Comment({ setHasClicked }: CommentProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
      }}
    >
      <Typography>Explain us how you did it and how you felt doing so:</Typography>

      <TextField
        id="outlined-multiline-static"
        label="Explain"
        multiline
        minRows={4}
        className="w-full"
      />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {/* <Box className="flex flex-wrap items-center justify-center gap-8"> */}
        <Button variant="contained" onClick={() => setHasClicked(false)}>
          Cancel
        </Button>

        <Button variant="contained" onClick={() => {}}>
          Confirm
        </Button>
      </Box>
    </Box>
  );
}
