'use client'
import Image from "next/image";
import {lazy, Suspense, useEffect, useState} from "react";
import {Options as BotOptions} from "react-chatbotify";

const ChatBot = lazy(() => import("react-chatbotify"));

interface ChatProps {
}

export default function Chat() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, [])
  const options: BotOptions = {
    chatButton: {
      icon: '/wizard.png'
    }
  }
  return (
    <>
    {isLoaded && (
      <Suspense fallback={<div>Loading...</div>}>
        <ChatBot options={options}/>
      </Suspense>
    )}
    </>
  );

}
