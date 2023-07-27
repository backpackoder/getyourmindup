import Image from "next/image";
import { Box, Typography } from "@mui/material";

// Utils
import { getDecodedParam } from "@/utils/getDecodedParam";
import { psychologists } from "@/utils/psychologists";

export default function Psychologist({ params }: { params: { psychologist: string } }) {
  const name = getDecodedParam(params.psychologist);

  const psychologist = psychologists.find((psychologist) => psychologist.name === name);

  if (!psychologist) return <PsychologistNotFound name={name} />;

  return (
    <article>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          width: "100%",
          p: 2,
        }}
      >
        <Image
          src={psychologist.img}
          alt={`Profile picture of ${psychologist.name}`}
          width={300}
          height={300}
          className="w-min"
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
            gap: 2,
            width: "100%",
            p: 2,
          }}
        >
          <Typography variant="h4" component="h2">
            {psychologist.name}
          </Typography>

          <Typography variant="h5" component="h3">
            {psychologist.location.city}, {psychologist.location.country}
          </Typography>

          <Typography variant="h5" component="h3">
            {psychologist.location.address}
          </Typography>

          <Typography variant="h5" component="h3">
            Price: {psychologist.price} {psychologist.currency} / {psychologist.duration}{" "}
            {psychologist.durationUnit}.
          </Typography>

          <Typography variant="h5" component="h3">
            Speaks {psychologist.languages.join(", ").toLowerCase()}.
          </Typography>
        </Box>
      </Box>

      <Typography>{psychologist.description}</Typography>

      <Typography>
        Specializations: {psychologist.specializations.join(", ").toLowerCase()}.
      </Typography>
    </article>
  );
}

type PsychologistNotFoundProps = {
  name: string;
};

function PsychologistNotFound({ name }: PsychologistNotFoundProps) {
  return (
    <article>
      <Typography variant="h4" component="h2">
        Psychologist {`"${name}"`} not found.
      </Typography>
    </article>
  );
}
