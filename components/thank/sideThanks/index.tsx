import { Alert, AlertTitle, Box, CircularProgress, Grid, IconButton, Typography } from '@mui/material'
import React, { useContext } from 'react'
import GradeIcon from '@mui/icons-material/Grade';
import { amber, blue } from '@mui/material/colors';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CloseIcon from '@mui/icons-material/Close';
import { AuthContext } from '@/context';
import { IPublication } from '@/interfaces';
import { FullScreenLoading } from '@/components/ui';

interface Props {
  thanks: IPublication[];
  onClick: () => void;
  deleteThank: (id: string) => void;
  isLoading: boolean;
}

export const SideThanks = ({ thanks, onClick, deleteThank, isLoading }: Props) => {
  const { user } = useContext(AuthContext);
  return (
    <Box
      sx={{
        height: { xs: '60vh', md: '94vh' },
        background: `linear-gradient(${blue[900]}, ${blue[800]});`,
        width: '100%',
        borderBottomRightRadius: 5,
      }}
    >
      <Grid container sx={{ justifyConten: 'center', alignContent: 'center', alignItems: 'center' }} >
        <Grid item xs={10}>

          <Typography component="h6" variant='h6' color="white" textAlign='center'>
            Thanks from the last 6 hours
          </Typography>
        </Grid>
        <Grid item textAlign={'end'} xs={2}>
          <Box textAlign={'end'}>
            <IconButton sx={{ color: 'white' }} onClick={onClick} type="button" size="large">
              <ChevronLeftIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid >
      <Box sx={{
        overflow: 'scroll',
        height: { xs: '51vh', md: '85.5vh', lg: '88.5vh' },
        overflowX: 'hidden',
      }}
        className="scroll-side-thanks"
      >
        {
          isLoading && <FullScreenLoading color='white' />
        }
        {thanks?.map((thank) => {
          return (
            < Alert
              key={thank.body}
              variant='outlined'
              icon={< GradeIcon sx={{ color: amber[800] }} />}
              sx={{ borderRadius: "4% / 50%", border: 'none', color: "white", mb: 0.8 }}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    deleteThank(thank._id);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              <AlertTitle></AlertTitle>
              {thank.body} - <strong>{thank?.itWasMe || (thank?.user && thank?.user === user?._id) ? 'Myself' : "A person in the world"}</strong>
            </Alert>
          )
        }
        )}
      </Box>
    </Box >
  )
}
