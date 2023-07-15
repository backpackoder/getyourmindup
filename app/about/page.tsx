import { Box, Typography } from "@mui/material";
import PicOfThibaut from "@/assets/imgs/Thibaut - Profile picture.jpg";
import PicOfMiguel from "@/assets/imgs/Miguel - Profile picture.jpg";
import Image, { StaticImageData } from "next/image";

export default function About() {
  return (
    <Box component={"article"}>
      <Typography variant="h3" component="h2">
        About
      </Typography>

      <Box>
        <Typography variant="h4" component="h3">
          Who are we?
        </Typography>

        <Presentation picture={PicOfThibaut} name="Thibaut" />
        <Presentation picture={PicOfMiguel} name="Miguel" />
      </Box>

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

type PresentationProps = {
  picture: StaticImageData;
  name: string;
};

function Presentation({ picture, name }: PresentationProps) {
  return (
    <Box>
      <Image
        src={picture}
        alt={`Picture of ${name}`}
        width={200}
        height={200}
        className="rounded-full"
      />

      <Typography variant="h5" component="h4">
        {name}
      </Typography>
    </Box>
  );
}
