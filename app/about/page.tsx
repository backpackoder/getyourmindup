import { Box, Typography } from "@mui/material";

// Components
import { Team } from "./components/Team";

export default function About() {
  return (
    <Box
      component={"article"}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Typography variant="h4" component="h2">
        This is a website to help you to be a better person.
      </Typography>

      <Typography variant="h6" component="p">
        Our mission is to help take care of the mental health of people, especially those who work a
        long time on a computer, to help calm anxiety with the following techniques. blah blah
        blah... In addition to leaving the contacts of certified psychologists. It is not intended
        for people who have strong mental problems, for this we recommend that you call one of the
        numbers that are in the footer or that you contact an expert doctor you trust.
      </Typography>

      <Team />
    </Box>
  );
}
