"use client";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen">
        <Image
          src="/img/Fondo.jpg"
          alt="Picture of the author"
          fill
          style={{
            objectFit: "cover",
            filter: "brightness(75%) contrast(110%)",
          }}
          quality={100}
          priority
        />
      </div>
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
          <Link href="/register">
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
          </Link>
          <Link href="/login">
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
          </Link>
        </div>
      </div>
    </>
  );
}
