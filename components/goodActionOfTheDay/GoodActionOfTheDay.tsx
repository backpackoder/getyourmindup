"use client";

import { useContext, useState } from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { Comment } from "./comment";
import { AuthContext } from "@/context";
import { getYourMindUpApi } from "@/services";
import { useRouter } from "next/navigation";
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import { IActionsOfTheDay } from "@/interfaces";
import { FinishModule } from "../shared/finishModule";

const getActionOfTheDay = async () => {
  const { data } = await getYourMindUpApi('/actionbyuser');
  return data;
}

export function GoodActionOfTheDay() {
  const { isLoggedIn } = useContext(AuthContext);
  const { push } = useRouter()
  const [hasClicked, setHasClicked] = useState(false);
  const [actionOfTheDay, setActionOfTheDay] = useState<IActionsOfTheDay>()
  const [isLoading, setIsLoading] = useState(false)
  const [isFinishModule, setIsFinishModule] = useState(false)
  const onGetActionOfTheDay = async () => {
    if (isLoading || actionOfTheDay) return;
    if (!isLoggedIn) {
      push('/auth/login?p=/action');
      return;
    }

    setIsLoading(true);
    try {
      const action = await getActionOfTheDay();
      setActionOfTheDay(action);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }

  return isFinishModule ? (
    <FinishModule
      setIsModuleFinish={setIsFinishModule}
      href="/relax"
      textToAgain="Would you like to do another one action of the day ?" />
  )
    : (
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
        }
        }
      >
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
            cursor: !actionOfTheDay && !isLoading ? 'pointer' : 'default',
            py: 2,
            px: 4,
            pr: !actionOfTheDay ? 6 : isLoading ? 1 : 3,
            borderRadius: 4,
            boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);",
            alignItems: 'center',
            fontWeight: 700,
            ':hover': !actionOfTheDay ? {
              background: '#8188f9',
            } : {},

          }}

          onClick={onGetActionOfTheDay}
        >

          {
            !isLoggedIn ? 'Log in to get your action of the day' : !actionOfTheDay && !isLoading && (
              <>
                Get action of the day
                <RocketLaunchOutlinedIcon sx={{ position: 'absolute', ml: 0.3, color: '#212121' }} />
              </>
            )
          }


          {isLoading && <CircularProgress thickness={2} />}
          {
            actionOfTheDay?.body &&
            <Typography variant="h4" component="p" className="fadeIn">
              {actionOfTheDay.body}
            </Typography>
          }
        </Box>

        {
          hasClicked && actionOfTheDay?._id ? (
            <Comment setHasClicked={setHasClicked} actionDone={actionOfTheDay?._id} setIsFinishModule={setIsFinishModule} />
          ) : (
            <Button variant="contained" disabled={!actionOfTheDay?.body} onClick={() => setHasClicked(true)}>
              I did it!
            </Button>
          )
        }
      </Box>
    );
}
