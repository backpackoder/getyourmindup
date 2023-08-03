"use client";
import { useCallback, useContext, useEffect, useState } from "react";
import { getYourMindUpApi } from "@/api";
import { IPublication } from "@/interfaces";
import { useWebSocket } from "next-ws/client";
import { AuthContext, UiContext } from "@/context";
import { FormData } from "@/components/thank/types";
import { useForm } from "react-hook-form";


const getThanks = async () => {
  const { data } = await getYourMindUpApi("/thanks");
  return data.publications;
}

export const useThanks = () => {
  const ws = useWebSocket();
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
        ws?.send(body);
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

  const onMessage = useCallback((event: MessageEvent) => {
    const resp = event.data.text();
    const newThank = resp;
    setThanks((t) => [{ body: newThank, itWasMe: false, _id: new Date().getTime().toString() } as IPublication, ...t,]);
  }, [setThanks]);

  useEffect(() => {
    if (localStorage.getItem('thank')) {
      setThankInStorage(JSON.parse(localStorage.getItem('thank')!));
    }
    ws?.addEventListener("message", onMessage);
    return () => ws?.removeEventListener("message", onMessage);
  }, [onMessage, ws]);

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
