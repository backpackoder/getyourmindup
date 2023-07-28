import { Alert, AlertTitle, Box } from '@mui/material'
import React from 'react'
import GradeIcon from '@mui/icons-material/Grade';
import { amber } from '@mui/material/colors';
import { Thank } from '../types';

interface Props {
  thanks: Thank[];
}

export const SideThanks = ({thanks}: Props) => {
  return (
    <Box
    sx={{
      // position: { xs: "relative", md: "absolute" },
      // top: { xs: 10, md: 90 },
      // left: { md: 28 },
    }}
  >
    {thanks?.map((thank) => (
      <Alert
        key={thank.body}
        icon={<GradeIcon sx={{ color: amber[800] }} />}
        sx={{ borderRadius: "4% / 50%", backgroundColor: '#008072', color: "black", mb: 2 }}
        elevation={1}
      >
        <AlertTitle></AlertTitle>
        {thank.body} - <strong>{thank.itWasMe ? 'Myself' : "A person in the world"}</strong>
      </Alert>
    ))}
    <Alert
      icon={<GradeIcon sx={{ color: amber[800] }} />}
      sx={{ borderRadius: "4% / 50%", backgroundColor: '#008072', color: "white", mb: 2 }}
      elevation={1}
    >
      I thank you for the beautiful day today - <strong>A person in the world</strong>
    </Alert>
    <Alert
      icon={<GradeIcon sx={{ color: amber[800] }} />}
      sx={{ borderRadius: "20px", backgroundColor: '#008072', color: "white", mb: 2 }}
      elevation={1}
    >
      I thank you for the beautiful day today - <strong>A person in the world</strong>
    </Alert>
    <Alert
      icon={<GradeIcon sx={{ color: amber[800] }} />}
      sx={{ borderRadius: "20px", backgroundColor: '#008072', color: "black", mb: 2 }}
      elevation={1}
    >
      I thank you for the beautiful day today - <strong>A person in the world</strong>
    </Alert>
  </Box>
  )
}
