"use client";
import { useContext, useState } from "react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { getSession, signIn, useSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { useForm } from "react-hook-form";
import { Box, Grid, Typography, TextField, Button, Chip } from "@mui/material";
import { ErrorOutline } from "@mui/icons-material";
import { AuthLayout } from "@/components/layouts/authLayout";
import { validations } from "@/utils";
import { AuthContext } from "@/context";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const RegisterPage = ({ searchParams,
}: {
  searchParams?: { p?: string };
}) => {
  const { status } = useSession()
  if (status === "authenticated") {
    redirect(searchParams?.p?.toString() || '/')
  }
  const { onRegisterUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onRegisterForm = async ({ name, email, password }: FormData) => {
    setShowError(false);
    const { hasError, message } = await onRegisterUser(name, email, password);
    if (hasError) {
      setShowError(true);
      setErrorMessage(message!);
      setTimeout(() => setShowError(false), 3000);
      return;
    }
    // const destination = router.query.p?.toString() || '/';
    // router.replace(destination);
    await signIn("credentials", { email, password });
  };
  return (
    <AuthLayout title="Ingresa">
      <form onSubmit={handleSubmit(onRegisterForm)} noValidate>
        <Box sx={{ width: 350, padding: "10px 20px" }}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h1" component="h1">
                Crear cuenta
              </Typography>
              <Chip
                label="Este usuario ya existe"
                sx={{ display: showError ? "flex" : "none" }}
                icon={<ErrorOutline />}
                color="error"
                className="fadeIn"
              />
            </Grid>
            <Grid item xs={12} mt={2}>
              <TextField
                label="Nombre completo"
                {...register("name", {
                  required: "Este campo es requerido",
                  minLength: 2,
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
                variant="filled"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} mt={2}>
              <TextField
                label="Correo"
                type="email"
                {...register("email", {
                  required: "Este campo es requerido",
                  validate: validations.isEmail,
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
                variant="filled"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} mt={2}>
              <TextField
                label="Contraseña"
                type="password"
                variant="filled"
                fullWidth
                {...register("password", {
                  required: "Este campo es requerido",
                  minLength: 6,
                })}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </Grid>
            <Grid item xs={12} mt={2}>
              <Button
                color="secondary"
                className="circular-btn"
                size="large"
                fullWidth
                type="submit"
              >
                Registrarse
              </Button>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="end" mt={1}>
              <Link
                href={`/auth/login?p=${searchParams?.p?.toString() || "/"}`}
                style={{ textDecoration: "underline" }}
              >
                ¿Ya tienes cuenta?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </form>
    </AuthLayout>
  );
};
