'use client';
import Wizard from "@/app/components/Wizard";
import {Button} from "@mui/base";

export default function Create() {
  return (
    <main className="h-full">
      <h1 className="font-aloja text-9xl p-10">QUIZZARD.</h1>
      <Button>Login to epam</Button>
      <Wizard className="absolute bottom-0 right-0 w-1/3 h-2/3" text="Welcome to quizzardland!"/>
    </main>
  );
}
