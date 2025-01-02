"use client";
import { Button, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src="/img/Fondo.jpg"
        alt="Picture of the author"
        fill
        style={{
          objectFit: "cover",
          filter: "brightness(50%) contrast(120%)",
        }}
        quality={100}
        priority
      />
      <div className="flex flex-col items-center justify-center w-full absolute top-1/4 z-50 m-auto">
        <Image
          src="/img/Logo.png"
          alt="Picture of thpnge author"
          width={150}
          height={150}
        />
        <Typography
          sx={{
            fontSize: {
              xs: "1.1rem",
              md: "2.5rem",
            },
            fontFamily: "sans-serif",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Gestiona tus tareas de manera sencilla.
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "1.1rem",
              md: "2.5rem",
            },
            fontFamily: "sans-serif",
            color: "white",
          }}
        >
          Añade, organiza y completa.
        </Typography>
        <div className="flex gap-4 mt-4">
          <Button
            sx={{
              fontSize: {
                xs: "0.8rem",
                md: "1.25rem",
              },
            }}
            variant="contained"
          >
            Registrate
          </Button>
          <Button
            sx={{
              fontSize: {
                xs: "0.8rem",
                md: "1.25rem",
              },
            }}
            color="secondary"
            variant="contained"
          >
            Comenzar !
          </Button>
        </div>
      </div>
    </>
  );
}
