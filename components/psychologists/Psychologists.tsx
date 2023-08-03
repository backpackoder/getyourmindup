import Image from "next/image";
import Link from "next/link";
import { Box, Typography } from "@mui/material";

// Utils
import { psychologists } from "@/utils/psychologists";

// Commons
import { ROUTES } from "@/commons/commons";
import { blue } from "@mui/material/colors";

export function Psychologist() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "start",
        gap: 2,
        width: "90%",
        background: `linear-gradient(${blue[100]}, ${blue[200]});`,
        p: 2,
        borderRadius: "1rem",
      }}
    >
      <Typography variant="h4" component="h3">
        Talk with a psychologist
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          p: 2,
          borderRadius: 4,
        }}
      >
        {psychologists.map((psychologist) => {
          return (
            <Link
              key={psychologist.name}
              href={ROUTES.PSYCHOLOGISTS.PSYCHOLOGIST(psychologist.name)}
              className="flex flex-col items-center justify-start gap-1 max-w-[350px] p-1 rounded-md shadow-md
              duration-300 transition-all hover:scale-105 hover:bg-green-200"
            >
              <Image
                src={psychologist.img}
                alt={`${psychologist.name}'s profile picture`}
                width={200}
                height={200}
                className="rounded-full"
              />

              <Typography variant="h5" component="h4">
                {psychologist.name}
              </Typography>

              <Typography>
                {psychologist.location.country}, {psychologist.location.city}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "start",
                  gap: 1,
                  width: "100%",
                  p: 1,
                }}
              >
                <Typography variant="h6" component="h5">
                  Specializations:
                </Typography>

                <ol className="flex flex-wrap items-center justify-center gap-2">
                  {psychologist.specializations.map((specialty, index) => {
                    return (
                      index < 3 && (
                        <li key={specialty} className="bg-green-300 py-1 px-2 rounded-md">
                          <Typography>{specialty}</Typography>
                        </li>
                      )
                    );
                  })}

                  <li className="bg-green-300 py-1 p-2 rounded-md">
                    {psychologist.specializations.length > 3 && (
                      <Typography>+{psychologist.specializations.length - 3}</Typography>
                    )}
                  </li>
                </ol>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "start",
                  gap: 1,
                  width: "100%",
                  p: 1,
                }}
              >
                <Typography variant="h6" component="h5">
                  {psychologist.languages.length === 1 ? "Language" : "Languages"}:
                </Typography>

                <ol className="flex flex-wrap items-center justify-center gap-2">
                  {psychologist.languages.map((language) => {
                    return (
                      <li key={language} className="bg-blue-300 py-1 p-2 rounded-md">
                        {language}
                      </li>
                    );
                  })}
                </ol>
              </Box>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
}
