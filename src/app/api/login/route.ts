import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { correo, password } = await req.json();

    if (!correo || !password) {
      return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 });
    }

    const userCredential = await signInWithEmailAndPassword(
      auth,
      correo,
      password
    );

    const { uid, email, displayName, phoneNumber, photoURL } =
      userCredential.user.providerData[0];

    return NextResponse.json({
      uid,
      email,
      displayName,
      phoneNumber,
      photoURL,
    });
  } catch (error : unknown) {
    if(error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Error desconocido" }, { status: 500 });
  }
}
