import { RocketLaunchOutlined } from '@mui/icons-material'
import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

interface Props {
  href: string;
  setIsModuleFinish: (state: boolean) => void;
  textToAgain: string;
}
export const FinishModule = ({ setIsModuleFinish, href, textToAgain }: Props) => {
  return (
    <Box
      component={"article"}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 150px)",
        gap: 4,
      }}
    >
      <Typography variant="h5" component="p">
        Congratulations! You have completed this module, we invite you to go to the next
      </Typography>
      <Grid textAlign={"center"}>
        <Button
          variant="contained"
          type="button"
          href={href}
          endIcon={<RocketLaunchOutlined />}
        >
          Next module
        </Button>
      </Grid>
      <Typography variant="h6" component="p">
        Or...
      </Typography>
      <Typography variant="h6" component="p">
        {textToAgain}
      </Typography>
      <Grid textAlign={"center"}>
        <Button
          variant="contained"
          type="button"
          onClick={() => setIsModuleFinish(false)}
        >
          Give thanks again
        </Button>
      </Grid>
    </Box>
  )
}
