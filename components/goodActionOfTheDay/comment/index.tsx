import { Box, Button, TextField, Typography } from "@mui/material";



type CommentProps = {
  setHasClicked: (value: boolean) => void;
};

export function Comment({ setHasClicked }: CommentProps) {
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

        <Button variant="contained" onClick={() => { }}>
          Confirm
        </Button>
      </Box>
    </Box>
  );
}
