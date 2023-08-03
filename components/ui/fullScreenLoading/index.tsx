import { Box, CircularProgress, Typography } from "@mui/material";

export const FullScreenLoading = ({ color }: { color?: string; }) => {
  return (
    <Box
      display="flex"
      flexDirection='column'
      justifyContent="center"
      alignItems="center"
      height="calc(100vh - 200px)"
    >
      <Typography mb={2} variant='h2' sx={{ color: color || "inherit" }} fontWeight={200} >Loading...</Typography>
      <CircularProgress sx={{ color: color || "primary.main" }} thickness={2} />

    </Box>
  );
};
