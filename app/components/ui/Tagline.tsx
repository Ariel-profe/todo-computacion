import { ReactNode } from "react";
import brackets from "@/app/assets/svg/Brackets";

export const Tagline = ({ className, children }:{ className:string, children:ReactNode }) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
    {brackets("left")}
    <div className="mx-3 text-n-3">{children}</div>
    {brackets("right")}
  </div>
  )
}
