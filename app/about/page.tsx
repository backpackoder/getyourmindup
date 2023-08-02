import { Box, Typography } from "@mui/material";

// Components
import { Team } from "@/components/about/team";
import { blue } from "@mui/material/colors";

export default function About() {
  return (
    <Box
      // component={"article"}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        background: `linear-gradient(${blue[50]}, ${blue[100]});`,
        p: 4,
        borderRadius: "1rem",
      }}
    >
      <Typography variant="h4" component="h4">
        About us
      </Typography>
      <Typography variant="subtitle1" component="h2">
        This is a website to help you take care of your mental health
      </Typography>

      <Typography variant="body1" component="p">
        Our mission is to help take care of the mental health of people, especially those who work a
        long time on a computer, to help calm anxiety.
        In addition to leaving the contacts of certified psychologists.
      </Typography>
      <Typography variant="body2" component="p">
        We propose three modules to complete each day.
        <br />
        <strong> First module:</strong> Giving thanks, being grateful helps peace of mind and reduces stress.
        <br />
        <strong> Second module:</strong> Do a specific action, according to your age, and your profession we will recommend an action that will help you disconnect and relax.
        <br />
        <strong> Third module:</strong> relax, here you will find music to relax your mind. or interesting podcasts about mental health.
      </Typography>
      <Typography variant="body2" component="p">
        This web It is not intended for people who have strong mental problems, for this we recommend that you call one of the
        numbers that are in the footer or that you contact an expert doctor you trust.
      </Typography>
      <Team />
    </Box>
  );
}
