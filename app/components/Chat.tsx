import Image from "next/image";
import {useState} from "react";

interface ChatProps {
  className: string
  text: string
}

export default function Chat({text, className}: ChatProps) {
  const [isOpen, setOpen] = useState(false);
  return (<div className={`${className}`}>
    <div className="absolute bottom-24 right-24 w-1/2 pb-[30%]">
      <Image
        src="/dialog.png"
        alt='dialog image'
        fill
      />
      <h2 className="absolute top-[30%] left-[30%] transform rotate-[-20deg] max-w-[70%] text-black">{text.toUpperCase()}</h2>
    </div>
    <button
      className="absolute bottom-0 right-0 w-32 h-32 rounded-full border-white border-2 overflow-hidden	"
      onClick={() => {setOpen(true)}}
    >
      <Image
        src="/wizard.png"
        alt="wizard image"
        fill
      />
    </button>
  </div>);

}
