"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getProviders, getSession, signIn } from "next-auth/react";
import { useSession } from "next-auth/react"
import { GetServerSideProps } from "next";
import { useForm } from "react-hook-form";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Chip,
  Divider,
} from "@mui/material";
import { AuthLayout } from "@/components/layouts/authLayout";
import { validations } from "@/utils";
import { ErrorOutline } from "@mui/icons-material";
import { redirect, useRouter } from "next/navigation";

type FormData = {
  email: string;
  password: string;
};

const LoginPage = ({
  searchParams,
}: {
  searchParams?: { p?: string };
}) => {
  const { status } = useSession()
  if (status === "authenticated") {
    redirect(searchParams?.p?.toString() || '/')
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [showError, setShowError] = useState(false);
  const [providers, setProviders] = useState<any>({});
  useEffect(() => {
    getProviders().then((prov) => {
      setProviders(prov);
    });
  }, []);

  const onLoginForm = async ({ email, password }: FormData) => {
    console.log('object');
    setShowError(false);
    const data = await signIn("credentials", { email, password });
    console.log(data);
    // const isValidLogin = await onLoginUser(email, password);
    // if (!isValidLogin) {
    //   setShowError(true)
    //   setTimeout(() => setShowError(false), 3000);
    //   return;
    // }
    // const destination = router.query.p?.toString() || '/';
    // router.replace(destination)
  };
  return (
    <AuthLayout title="Ingresar">
      <form onSubmit={handleSubmit(onLoginForm)} noValidate>
        <Box sx={{ width: 350, padding: "10px 20px" }}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h1" component="h1">
                Iniciar Sesión
              </Typography>
              <Chip
                label="no reconocemos ese usuario"
                sx={{ display: showError ? "flex" : "none" }}
                icon={<ErrorOutline />}
                color="error"
                className="fadeIn"
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
                  minLength: { value: 6, message: "Mínimo 6 caracteres" },
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
                disabled={showError}
              >
                ingresar
              </Button>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="end" mt={1}>
              <Link
                href={`/auth/register?p=${searchParams?.p?.toString() || "/"}`}
                style={{ textDecoration: "underline" }}
              >
                ¿No tienes cuenta?
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              display="flex"
              flexDirection="column"
              justifyContent="end"
              mt={1}
            >
              <Divider sx={{ width: "100%", mb: 2 }} />
              {Object.values(providers).map((provider: any) => {
                if (provider.id === 'credentials') return (<div key='credencials'></div>)
                return (
                  <Button
                    key={provider.id}
                    variant="outlined"
                    fullWidth
                    color="primary"
                    sx={{ mb: 1 }}
                    onClick={() => signIn(provider.id)}
                  >
                    {provider.name}
                  </Button>
                );
              })}
            </Grid>
          </Grid>
        </Box>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;