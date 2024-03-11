import { GrTechnology } from "react-icons/gr";

export const Generating = ({className}:{className: string}) => {
  return (
    <div className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] text-base gap-3 ${className || ''}`}>
        <GrTechnology className="animate-pulse text-2xl" />
        Sumergete en nuestro mundo...
    </div>
  )
}
