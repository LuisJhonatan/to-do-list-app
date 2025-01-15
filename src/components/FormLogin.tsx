"use client";
import { useUser } from "@/app/context/UserContext";
import { auth } from "@/firebase/config";
import { Person, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { useForm } from "react-hook-form";

interface Inputs {
  correo: string;
  password: string;
}

export default function FormLogin() {
  const user = useUser();
  const { register, handleSubmit } = useForm<Inputs>();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit= async (data: Inputs) => {
    try {
      const response = await signInWithEmailAndPassword(auth, data.correo, data.password);
      const u = {
        uid: response.user.uid,
        email: response.user.email,
        displayName: response.user.displayName,
        phoneNumber: response.user.phoneNumber,
        photoURL: response.user.photoURL,
      }
      user.setUser(u);
      router.push("/home");      
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      
    }
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
        {...register("correo")}
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
