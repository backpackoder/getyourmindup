import { Box, Typography } from "@mui/material";

// Components
import { Team } from "./components/Team";

export default function About() {
  return (
    <Box component={"article"}>
      <Typography variant="h3" component="h2">
        About
      </Typography>

      <Team />

      <Typography variant="h6" component="p">
        This is a website to help you to be a better person. Our mission is to help take care of the
        mental health of people, especially those who work a long time on a computer, to help calm
        anxiety with the following techniques. blah blah blah... In addition to leaving the contacts
        of certified psychologists. It is not intended for people who have strong mental problems,
        for this we recommend that you call one of the numbers that are in the footer or that you
        contact an expert doctor you trust.
      </Typography>
    </Box>
  );
}
