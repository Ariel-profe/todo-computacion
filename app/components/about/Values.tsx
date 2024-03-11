import { smallSphere, stars } from "@/app/assets"
import { Section } from "../ui/Section"
import { Heading } from "../ui/Heading"
import { Fragment } from "react"
import { LeftLine, RightLine } from "../design/Values"
import { ValuesList } from "./ValuesList"

export const Values = () => {
  return (
    <Section className="overflow-hidden" id="values">
        <div className="container relative z-2">
            <Heading className={""} title={<Fragment>Somos <br /> <span className="bg-gradient-to-r from-primary-bluelight to-primary-green inline-block text-transparent bg-clip-text font-bold">TODO COMPUTACIÓN</span> <br /> Mendoza</Fragment>} tag="Valores y cimientos" />

            <div className="relative">
                <ValuesList />
                <LeftLine />
                <RightLine />
            </div>
        </div>

        <div className="hidden relative justify-center mt-[6.5rem] lg:flex animate-pulse">
                <img src={smallSphere.src} alt="esfera" className="relative z-1" width={255} height={255} />
                <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <img src={stars.src} alt="estrellas" className="w-full" width={950} height={400} />
                </div>
            </div>
    </Section>
  )
}
