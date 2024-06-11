import Image from "next/image";
import NavBar from "@/components/nav/navbar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <p className="text-4xl font-bold">Welcome to your dashboard</p>
      </div>
    </>
  );
}
