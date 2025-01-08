"use client";
import { useUser } from "@/app/context/UserContext";
import Header from "@/components/Header";

export default function Home (){
    const user = useUser();
    
    return (
        <div>
            <Header />
            <h1>Home</h1>
        </div>
    )
}