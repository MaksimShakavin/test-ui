import Image from "next/image";

interface WizardProps {
  className: string
  text: string
}

export default function Wizard({text, className}: WizardProps) {
  return (<div className={`${className}`}>
    <div className="absolute top-0 left-0 w-1/2 pb-[30%]">
      <Image
        src="/dialog.png"
        alt='dialog image'
        fill
      />
      <h2 className="absolute top-[30%] left-[17%] transform rotate-[-20deg] max-w-[70%] text-black">{text.toUpperCase()}</h2>
    </div>
    <div className="absolute bottom-0 right-0 w-1/2 pb-[60%]">
      <Image
        src="/wizard.png"
        alt="wizard image"
        fill
      />
    </div>
  </div>);

}
