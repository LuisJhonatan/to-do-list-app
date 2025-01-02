"use client";
import { Person, Visibility } from "@mui/icons-material";
import {
  Button,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  email: string;
  password: string;
}

export default function FormLogin() {
  const { register, handleSubmit } = useForm<Inputs>();
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <Container
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="h3">Iniciar sesión</Typography>
      <TextField
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Person />
              </InputAdornment>
            ),
          },
        }}
        {...register("email")}
        type="email"
        label="Correo electrónico"
        error={false}
      />
      <TextField
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment onClick={handleClick} position="start">
                <Visibility
                  sx={{
                    cursor: "pointer",
                  }}
                />
              </InputAdornment>
            ),
          },
        }}
        {...register("password")}
        type={showPassword ? "text" : "password"}
        label="Contraseña"
        error={false}
      />
      <Button type="submit">Iniciar sesión</Button>
    </Container>
  );
}
