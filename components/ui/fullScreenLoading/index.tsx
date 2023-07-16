import { Box, CircularProgress, Typography } from "@mui/material";

export const FullScreenLoading = () => {
  return (
    <Box
      display="flex"
      flexDirection='column'
      justifyContent="center"
      alignItems="center"
      height="calc(100vh - 200px)"
    >
        <Typography mb={2} variant='h2' fontWeight={200} >Loading...</Typography>
        <CircularProgress thickness={2} />

    </Box>
  );
};
