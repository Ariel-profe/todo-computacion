import { productsToSell, collabContent, collabText } from "@/utils/constants"
import { Section } from "../ui/Section"
import { check, whiteISO, whiteLogo } from "@/app/assets"
import { Button } from "../ui/Button"
import { LeftCurve, RightCurve } from "../design/Collaboration"

export const Collaboration = () => {
  return (
    <Section id="collaboration" crosses>
        <div className="container lg:flex">
            <div className="max-w-[25rem]">
                <h2 className="h2 mb-4 md:mb-8">
                    Descubre los {' '}
                    <span className="bg-gradient-to-r from-primary-bluelight to-primary-green inline-block text-transparent bg-clip-text font-bold">productos
                    </span>
                    {' '} que ofrecemos
                </h2>

                <ul className="max-w-[22rem] mb-10 md:mb-14">
                    {collabContent.map( (item) => (
                            <li key={item.id} className="mb-3 py-3">
                                <div className="flex items-center">
                                    <img src={check.src} alt="check" width={24} height={24} />
                                    <h6 className="body-2 ml-5">{item.title}</h6>
                                </div>
                                {item.text && (
                                        <p className="body-2 mt-3 text-n-4">{item.text}</p>
                                    )}
                            </li>
                    ))}
                </ul>

                <Button href="/marcas">
                    Explorar
                </Button>
            </div>

            <div className="lg:ml-auto xl:w-[38rem] mt-20">
                <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
                    <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full animate-pulse">
                        <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                            <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                                <img src={whiteISO.src} alt="tc-logo" width={48}height={48} />
                            </div>
                        </div>
                    </div>

                    <ul>
                        {productsToSell.map((item, index) => (
                            <li key={item.id} className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`}>
                                <div className={`group relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45}`}>
                                    <img
                                        src={item.icon.src}
                                        alt={item.title}
                                        className="m-auto"
                                        width={40}
                                        height={40}
                                    />
                                    <div className="absolute top-0 left-14 opacity-0 transition-opacity md:group-hover:opacity-80">
                                        {item.title}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <LeftCurve />
                    <RightCurve />
                </div>
            </div>
        </div>
    </Section>
  )
}
