"use client";
import { Person, Visibility, VisibilityOff } from "@mui/icons-material";
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
      <Typography
        sx={{
          fontSize: {
            xs: "1.1rem",
            md: "2.5rem",
          },
          fontFamily: "sans-serif",
          fontWeight: "bold",
          color: "black",
        }}
      >
        Iniciar sesión
      </Typography>
      <TextField
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Person
                sx={{
                  fontSize: "1.2rem",
                  
                }}
                />
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
                {showPassword ? (
                  <Visibility
                    sx={{
                      cursor: "pointer",
                      fontSize: "1.2rem",
                    }}
                  />
                ) : (
                  <VisibilityOff
                    sx={{
                      cursor: "pointer",
                      fontSize: "1.2rem",
                    }}
                  />
                )}
              </InputAdornment>
            ),
          },
        }}
        {...register("password")}
        type={showPassword ? "text" : "password"}
        label="Contraseña"
        error={false}
        autoComplete="off"
      />
      <Button type="submit">Iniciar sesión</Button>
    </Container>
  );
}
