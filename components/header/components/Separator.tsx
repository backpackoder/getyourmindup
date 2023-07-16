import { Box } from "@mui/material";

export function Separator() {
  return (
    <>
      <Box flex={1} />
      <Box sx={{ display: { xs: "none", sm: "block" } }} className="fadeIn"></Box>
      <Box flex={1} />
    </>
  );
}
