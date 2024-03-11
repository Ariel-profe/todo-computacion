import Link from "next/link";
import { CiLocationArrow1 } from "react-icons/ci";

import { notification1 } from "@/app/assets"
import { notificationImages } from "@/utils/constants"

export const Notification = ({className, title}:{className:string, title:string}) => {
  return (
    <div className={`${className || ''} flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5 `}>

        <img src={notification1.src} alt="imagen" width={62} height={62} className="rounded-xl" />
        <div className="flex-1">
            <h6 className="mb-1 font-semibold text-base">{title}</h6>

            <div className="flex items-center justify-center gap-x-3">
                <ul className="flex -n-0.5">
                    {notificationImages.map((item,index) => (
                        <li key={index} className="flex size-6 border-2 border-n-12 rounded-full overflow-hidden">
                            <img
                                src={item.src}
                                alt={item.src}
                                className="w-full"
                                width={20}
                                height={20}
                            />
                        </li>
                    ))}
                </ul>
                <Link href={"#resenas"} className="text-n-13  text-3xl">
                    <CiLocationArrow1 className="md:hover:fill-primary-bluelight md:hover:scale-110 md:hover:translate-x-2 transition-all" />
                </Link>
            </div>
        </div>
    </div>
  )
}
