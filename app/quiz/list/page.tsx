'use client';
import Chat from "@/app/components/Chat";

export default function Home() {
  return (
    <main className="h-full">
      <h1 className="font-aloja text-9xl p-10">QUIZZARD.</h1>
      <Chat className="absolute bottom-0 right-0 w-1/3 h-2/3" text="Welcome to quizzardland!"/>
    </main>
  );
}
