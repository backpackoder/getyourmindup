"use client";
import { useCallback, useContext, useEffect, useState } from "react";
import { getYourMindUpApi } from "@/api";
import { IPublication } from "@/interfaces";

import { AuthContext, SocketContext, UiContext } from "@/context";
import { FormData } from "@/components/thank/types";
import { useForm } from "react-hook-form";


const getThanks = async () => {
  const { data } = await getYourMindUpApi("/thanks");
  return data.publications;
}

export const useThanks = () => {

  const { socket } = useContext(SocketContext);
  const { setOpenSnackbarSuccess, setOpenSnackbarError } = useContext(UiContext);
  const { onLevelUp } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();
  const [thanks, setThanks] = useState<IPublication[]>([]);
  const [thankInStorage, setThankInStorage] = useState<FormData | null>(null);
  const [isPrivate, setIsPrivate] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isModuleFinish, setIsModuleFinish] = useState<boolean>(false);

  useEffect(() => {
    setValue("isPrivate", isPrivate);
  }, [setValue, isPrivate]);

  useEffect(() => {
    setIsLoading(true)
    getThanks().then((resp) => {
      setThanks(resp)
      setIsLoading(false)
    })
  }, [])

  const onCreatePublication = async ({ body, isPrivate }: FormData, isAuthenticated: boolean) => {
    if (!isAuthenticated) {
      localStorage.setItem('thank', JSON.stringify({ body, isPrivate }))
      setThanks([{ body, itWasMe: true, _id: new Date().getTime().toString() } as IPublication, ...thanks,])
      return;
    }
    try {
      const { data } = await getYourMindUpApi.post("/thanks", { body, isPrivate });
      if (!isPrivate) {
        socket.emit('newThank', body);
      }
      onLevelUp()
      setThanks([{ body, itWasMe: true, _id: new Date().getTime().toString() } as IPublication, ...thanks,])
      setOpenSnackbarSuccess(true);
      setValue('body', '');
      setValue('isPrivate', false);
      setIsModuleFinish(true);
    } catch (error) {
      setOpenSnackbarError(true);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('thank')) {
      setThankInStorage(JSON.parse(localStorage.getItem('thank')!));
    }
    socket.on('newThank', newThank => {
      setThanks((t) => [{ body: newThank, itWasMe: false, _id: new Date().getTime().toString() } as IPublication, ...t,]);
    });
  }, [socket]);

  const deleteThank = (_id: string) => {
    setThanks(thanks.filter(t => t._id !== _id))
  }

  return {
    thanks,
    onCreatePublication,
    setThanks,
    deleteThank,
    thankInStorage,
    register,
    handleSubmit,
    errors,
    setIsPrivate,
    isPrivate,
    isLoading,
    isModuleFinish,
    setIsModuleFinish,
  }
}
