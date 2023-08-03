// Components
import { Psychologist } from "@/components/psychologists/Psychologists";
import { BlogList } from "@/components/blog/BlogList";
import { Box, Button, Typography } from "@mui/material";
import { RocketLaunchOutlined } from "@mui/icons-material";
import About from "./about/page";

export default async function Home() {
  return (
    <>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "calc(100vh - 150px)",
        gap: 4,
      }}>

        <Box sx={{
          mt: '10%'
        }}>
          <Typography variant="h4" component="h2" mb={4} >
            Take care of your mental health
          </Typography>

          <Typography variant="h6" component="p" mb={4} >
            Our mission is to help take care of the mental health of people, especially those who work a
            long time on a computer, to help calm anxiety.
          </Typography>
        </Box>
        <Button href="/thank" size="large" endIcon={<RocketLaunchOutlined />} variant="contained">Lets go</Button>
      </Box>
      <About />
      <Psychologist />
      <BlogList />
    </>
  );
}
