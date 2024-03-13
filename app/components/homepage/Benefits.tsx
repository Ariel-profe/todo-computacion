"use client";

import { IoIosArrowForward } from "react-icons/io";

import ClipPath from "@/app/assets/svg/ClipPath";
import { benefits } from "@/utils/constants";
import { GradientLight } from "../design/Benefits";
import { Heading } from "../ui/Heading";
import { Section } from "../ui/Section";
import { Fragment } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/Button";


export const Benefits = () => {

  const {push} = useRouter();

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title={<Fragment>Tus necesidades son nuestros <span className="bg-gradient-to-r from-primary-bluelight to-primary-green inline-block text-transparent bg-clip-text font-bold">servicios</span></Fragment>}
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl.src})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center justify-between mt-auto">
                  <img
                    src={item.iconUrl.src}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <button 
                    className="bg-n-7 flex items-center justify-center text-center p-2 rounded-full md:hover:scale-110 transition cursor-pointer"
                    onClick={() => push('/servicios')}
                  >
                    <IoIosArrowForward size={20} />
                  </button>                
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl.src}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>

        <div className="w-full text-center">
          <Button href="/nosotros" white>
            Conocenos
          </Button>    
        </div>
      </div>
    </Section>
  );
};
