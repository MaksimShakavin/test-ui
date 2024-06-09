'use client';
import Chat from "@/app/components/Chat";

import {QuestList} from "@/app/components/QuestList";

export default function List() {
  return (
    <main className="h-full">
      <h3 className="font-aloja text-3xl p-10">QUIZZARD.</h3>
      {/*<QuestList/>*/}
      <Chat className="absolute bottom-0 right-0 w-1/3 h-2/3" text="Welcome to quizzardland!"/>
    </main>
  );
}
