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
          filter: "brightness(50%) contrast(120%)", // Aplicar filtros
        }}
        quality={100}
        priority
      />
      <div className="flex flex-col items-center justify-center w-full absolute top-1/4 z-50 m-auto">
        <Image
          src="/img/Logo.png"
          alt="Picture of thpnge author"
          width={100}
          height={100}
        />
        <Typography
          sx={{
            fontSize: "1.1rem",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Gestiona tus tareas de manera sencilla.
        </Typography>
        <Typography
          sx={{
            fontSize: "1.1rem",
            fontFamily: "sans-serif",
            color: "white",
          }}
        >
          Añade, organiza y completa.
        </Typography>
        <div className="flex gap-4 mt-4">
        <Button variant="contained">Contained</Button>
        <Button color="secondary" variant="contained">Comenzar</Button>
        </div>
      </div>
    </>
  );
}
