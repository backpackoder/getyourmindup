import { Box, Typography } from "@mui/material";
// import Carousel from "react-material-ui-carousel";

export default function Blog() {
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
        Read some articles
      </Typography>
    </Box>
  );
}
