import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

interface Example {
  id: string;
  name: string;
  surname: string;
}

export async function GET() {
  try {
    const collectionRef = collection(db, "example");

    const querySnapshot = await getDocs(collectionRef);

    const example: Example[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data() as Omit<Example, "id">;
      example.push({ id: doc.id, ...data });
    });

    return NextResponse.json(example);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}
