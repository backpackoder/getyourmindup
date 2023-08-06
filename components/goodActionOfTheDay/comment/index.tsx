import { getYourMindUpApi } from "@/services";
import { AuthContext } from "@/context";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { useForm } from "react-hook-form";



type CommentProps = {
  setHasClicked: (value: boolean) => void;
  actionDone: string;
  setIsFinishModule: (state: boolean) => void;
};

type FormData = { story: string; }
type DataPost = { actionDone: string; story: string; }

const createActionByUser = async ({
  actionDone,
  story, }: DataPost) => {
  const { data } = await getYourMindUpApi.post('/actionbyuser', {
    actionDone,
    story
  });
  return data;
}


export function Comment({ setHasClicked, actionDone, setIsFinishModule }: CommentProps) {
  const { onLevelUp } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();



  const onCreateActionByUser = async ({ story }: FormData) => {
    const isCreatedActionByUser = await createActionByUser({ actionDone, story });
    if (isCreatedActionByUser) {
      onLevelUp();
      setValue('story', '');
      setIsFinishModule(true)
    }
  }


  return (
    <form onSubmit={handleSubmit(onCreateActionByUser)} noValidate>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}
      >
        <Typography>Explain us how you did it and how you felt doing so:</Typography>

        <TextField
          id="outlined-multiline-static"
          label="Explain"
          multiline
          minRows={4}
          className="w-full"
          {...register("story", {
            required: "This field is required",
            minLength: 10,
          })}
          variant="standard"
          error={!!errors.story}
          helperText={errors.story?.message}
        />

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <Button variant="contained" type="button" onClick={() => setHasClicked(false)}>
            Cancel
          </Button>

          <Button variant="contained" type="submit" onClick={() => { }}>
            Confirm
          </Button>
        </Box>
      </Box >
    </form>
  );
}
