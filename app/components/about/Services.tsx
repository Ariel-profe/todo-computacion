"use client";

import { Fragment } from "react";
import { grid, check2, loading1 } from "@/app/assets";
import { roadmap } from "@/utils/constants";
import { Gradient } from "../design/Roadmap";
import { Button } from "../ui/Button";
import { Heading } from "../ui/Heading";
import { Section } from "../ui/Section";
import { Tagline } from "../ui/Tagline";
import { ScrollParallax } from "react-just-parallax";


export const Services = () => {

  return (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
    <Heading
      className=""
      title={<Fragment>¿En qué podemos <span className="bg-gradient-to-r from-primary-bluelight to-primary-green inline-block text-transparent bg-clip-text font-bold">ayudarte</span>?</Fragment>}
        />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] hover:shadow-xl hover:shadow-white/10 transition-all ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] xl:p-15 overflow-hidden">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid.src}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                
                  <div className={`relative z-1`}>
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <Tagline className={""}>TC Mendoza</Tagline>
                    </div>

                    <div className="mb-10 -my-10 -mx-15">
                      <img
                        className="w-full"
                        src={item.imageUrl.src}
                        width={628}
                        height={426}
                        alt={item.title}
                      />
                    </div>

                      <h4 className="h4 mb-4">{item.title}</h4>
                      <p className="body-2 text-n-4">{item.text}</p>

                    
                  </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/contacto">Contactanos</Button>
      </div>
    </div>
  </Section>
)
}
