"use client";
import { useContext, useState } from "react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { getSession, signIn, useSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { useForm } from "react-hook-form";
import { Box, Grid, Typography, TextField, Button, Chip, MenuItem, FormControl, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ErrorOutline } from "@mui/icons-material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AuthLayout } from "@/components/layouts/authLayout";
import { validations } from "@/utils";
import { AuthContext } from "@/context";

export type FormDataUser = {
  name: string;
  email: string;
  password: string;
  age: number;
  sex: 'male' | 'famale';
  profession?: string;
  liveWith?: "family" | "friends" | "spouse" | "alone";
  passions?: string;
  hasPet?: boolean;
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
  } = useForm<FormDataUser>();
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onRegisterForm = async (
    newUser: FormDataUser) => {
    setShowError(false);
    const { hasError, message } = await onRegisterUser(newUser);
    if (hasError) {
      setShowError(true);
      setErrorMessage(message!);
      setTimeout(() => setShowError(false), 3000);
      return;
    }
    // const destination = router.query.p?.toString() || '/';
    // router.replace(destination);
    await signIn("credentials", { email: newUser.email, password: newUser.password });
  };
  return (
    <AuthLayout title="Ingresa">
      <form onSubmit={handleSubmit(onRegisterForm)} noValidate>
        <Box sx={{ width: 350, padding: "10px 20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h1" component="h1">
                Account registration
              </Typography>
              <Chip
                label="This user already exists"
                sx={{ display: showError ? "flex" : "none" }}
                icon={<ErrorOutline />}
                color="error"
                className="fadeIn"
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                label="Full name*"
                {...register("name", {
                  required: "This field is required",
                  minLength: 2,
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
                variant="filled"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                label="Email*"
                type="email"
                {...register("email", {
                  required: "This field is required",
                  validate: validations.isEmail,
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
                variant="filled"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password*"
                type="password"
                variant="filled"
                fullWidth
                {...register("password", {
                  required: "This field is required",
                  minLength: 6,
                })}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type={"number"}
                label="Age*"
                {...register("age", {
                  required: "This field is required",
                  maxLength: 2,
                })}
                error={!!errors.age}
                helperText={errors.age?.message}
                variant="filled"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField
                  select
                  variant="filled"
                  defaultValue={'male'}
                  label="Sex*"
                  {...register("sex", {
                    required: "This field is required",
                  })}
                  error={!!errors.sex}
                  helperText={errors.sex?.message}
                >
                  <MenuItem value={'famale'}>
                    famale
                  </MenuItem>
                  <MenuItem value={'male'}>
                    male
                  </MenuItem>
                </TextField>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Accordion>
                <AccordionSummary
                  sx={{ backgroundColor: "rgba(0, 0, 0, 0.06)" }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Optional fields</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: 0 }}>
                  <Grid container spacing={1}>

                    <Grid item xs={12}>
                      <TextField
                        label="Profession"
                        {...register("profession")}
                        error={!!errors.profession}
                        helperText={errors.profession?.message}
                        variant="filled"
                        fullWidth
                      />
                    </Grid>


                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <TextField
                          select
                          variant="filled"
                          label="I live with"
                          defaultValue={''}
                          {...register("liveWith")}
                          error={!!errors.liveWith}
                          helperText={errors.liveWith?.message}
                        >
                          <MenuItem value="family">
                            Family
                          </MenuItem>
                          <MenuItem value="friends">
                            Friends
                          </MenuItem>
                          <MenuItem value="spouse">
                            Spouse
                          </MenuItem>
                          <MenuItem value="alone">
                            Alone
                          </MenuItem>
                        </TextField>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <TextField
                          select
                          variant="filled"
                          label="Do you have a pet"
                          defaultValue={0}
                          {...register("hasPet")}
                          error={!!errors.hasPet}
                          helperText={errors.hasPet?.message}
                        >
                          <MenuItem value={1}>
                            Yes
                          </MenuItem>
                          <MenuItem value={0}>
                            No
                          </MenuItem>
                        </TextField>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} >
                      <TextField
                        label="My hobbies are"
                        {...register("passions")}
                        error={!!errors.passions}
                        helperText={errors.passions?.message}
                        variant="filled"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>


            </Grid>
            <Grid item xs={12}>
              <Button
                color="secondary"
                className="circular-btn"
                size="large"
                fullWidth
                type="submit"
              >
                Create Account
              </Button>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="end" mt={1}>
              <Link
                href={`/auth/login?p=${searchParams?.p?.toString() || "/"}`}
                style={{ textDecoration: "underline" }}
              >
                Already have an account?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;