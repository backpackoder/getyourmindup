"use client";

import { useContext, useEffect, useState } from "react";
import { Alert, Box, Button, Chip, CircularProgress, TextField, Typography } from "@mui/material";
import { Comment } from "./comment";
import { AuthContext } from "@/context";
import Link from "next/link";
import { getYourMindUpApi } from "@/api";
import { blue } from "@mui/material/colors";
import { useRouter } from "next/navigation";

const getActionOfTheDay = async () => {
  const { data } = await getYourMindUpApi('');
  return 'action'
}

export function GoodActionOfTheDay() {
  const { isLoggedIn } = useContext(AuthContext);
  const {push} = useRouter()
  const [hasClicked, setHasClicked] = useState(false);
  const [actionOfTheDay, setActionOfTheDay] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    console.log('action of the day');
  }, [])

  const onGetActionOfTheDay = async () => {
    if (isLoading) return;
    if (!isLoggedIn) {
      push('/auth/login?p=/action');
      return;
    }

    setIsLoading(true);
    try {
      const action = await getActionOfTheDay();
      setActionOfTheDay(action)
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }

  return (
    <Box
      component={"article"}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        width: "100%",
        padding: 4,
      }}
    >
      {
        !isLoggedIn &&
        <Alert sx={{ mt: -3 }} severity="warning">You must register to enjoy all the features — <Link href='/auth/register?p=thanks'><strong> Sign Up</strong></Link> </Alert>
      }
      <Typography variant="h4" component="h4">
        {!actionOfTheDay
          ?
          'We invite you to do a concrete good action today'
          :
          ' The good action to realize for today is...'
        }

      </Typography>

      <Box
        className="fadeIn"
        sx={{
          background: actionOfTheDay ? 'linear-gradient(#008072, #290fb5);' : 'linear-gradient(#cbccfc, #a7abfa);',
          color: !actionOfTheDay ? 'black' : 'white',
          cursor: !actionOfTheDay && !isLoading ? 'pointer' : 'none',
          py: 2,
          px: 4,
          borderRadius: 4,
          boxShadow: "lg",
        }}
        onClick={onGetActionOfTheDay}
      >

        {
          !isLoggedIn ? 'Log in to get your action of the day' : !actionOfTheDay && !isLoading && 'Get action of the day'
        }


        {isLoading && <CircularProgress thickness={2} />}
        {
          actionOfTheDay &&
          <Typography variant="h4" component="p" className="fadeIn">
            {actionOfTheDay}
          </Typography>
        }
      </Box>

      {hasClicked ? (
        <Comment setHasClicked={setHasClicked} />
      ) : (
        <Button variant="contained" disabled={!actionOfTheDay } onClick={() => setHasClicked(true)}>
          I did it!
        </Button>
      )}
    </Box>
  );
}
