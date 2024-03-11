import { aboutValues } from "@/utils/constants"
import { check } from "@/app/assets"

export const ValuesList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
        {aboutValues.map( item => (
            <div key={item.id} className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-primary-green [&>h4]:even:text-color-1 [&>h4]:last:text-primary-bluedark hover:shadow-xl hover:shadow-white/10 transition">
                <h4 className="h4 mb-4">{item.title}</h4>

                <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">{item.description}</p>

               <ul>
                {item.features.map( (feature,index) => (
                    <li key={index} className="flex items-start py-5 border-t border-n-6">
                        <img src={check.src} alt="check" width={24} height={24} />
                        <p className="body-2 ml-4">{feature}</p>
                    </li>
                ))}
               </ul>
            </div>
        ))}
    </div>
  )
}