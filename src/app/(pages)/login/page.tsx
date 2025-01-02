'use client'
import FormLogin from "@/components/FormLogin";
import Image from "next/image";

export default function SectionLogin() {
  return (
    <>
      <div className="relative w-full h-screen">
        <Image
            src={"/img/Fondo2.jpg"}
            alt="Picture of the author"
            fill
            style={{
              objectFit: "cover",
            }}
            quality={100}
            priority
        />
      </div>
      <div className="w-3/4 md:w-1/2 flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 m-auto bg-white bg-opacity-70 rounded-lg pt-4">
            <FormLogin />
      </div>
    </>
  );
}
