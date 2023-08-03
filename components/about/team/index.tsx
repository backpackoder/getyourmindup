import Image from "next/image";
import { Box, Typography } from "@mui/material";

// Commons
import { OWNERS } from "@/commons/commons";

export function Team() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        p: 4,
      }}
    >
      <Typography variant="h4" component="h3">
        Who are we?
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Presentation person={OWNERS.MIGUEL} />
        <Presentation person={OWNERS.THIBAUT} />
      </Box>
    </Box>
  );
}

type PresentationProps = {
  person: (typeof OWNERS)[keyof typeof OWNERS];
};

function Presentation({ person }: PresentationProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        // alignItems: "center",
        gap: 2,
      }}
    >
      <Image
        src={person.PICTURE}
        alt={`Picture of ${person.NAME} ${person.SURNAME}`}
        width={150}
        height={150}
        className="rounded-full"
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h5" component="h4">
          {person.NAME} {person.SURNAME}
        </Typography>
        <Typography variant="body1" component="p">
          {person.BIO}
        </Typography>
      </Box>
    </Box>
  );
}
