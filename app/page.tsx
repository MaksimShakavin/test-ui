'use client';
import Wizard from "@/app/components/Wizard";
import {Button} from "@/app/components/Button";
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <main className="h-full w-2/3 flex flex-col gap-5">
      <h1 className="font-aloja text-9xl p-10">QUIZZARD.</h1>
      <Button className="mt-10 w-48 self-center" onClick={() => router.push('/menu')}>Login to EPAM</Button>
      <Wizard className="absolute bottom-0 right-0 w-1/3 h-2/3" text="Welcome to quizzardland!"/>
    </main>
  );
}
