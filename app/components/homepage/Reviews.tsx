"use client";

import { Fragment } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';

import { Heading } from "../ui/Heading";
import { Section } from "../ui/Section";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { notification1, notification2, notification3, notification4 } from "@/app/assets";


export const Reviews = () => {
  return (
    <Section id="resenas">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title={<Fragment>Nuestros clientes <span className="bg-gradient-to-r from-primary-bluelight to-primary-green inline-block text-transparent bg-clip-text font-bold">opinan</span>:</Fragment>}
        />

        <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        loop
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="container mx-auto h-[500px] z-50"
        >
        <SwiperSlide>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-3">
            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={notification2.src} alt="Bonnie image"/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sit eos saepe architecto ipsa!</p>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Nadir Daou</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Comerciante</span>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-3">
            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={notification3.src} alt="Bonnie image"/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sit eos saepe architecto ipsa!</p>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Ariel Elias</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Comerciante</span>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-3">
            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={notification4.src} alt="Bonnie image"/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sit eos saepe architecto ipsa!</p>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Daniela Amin</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Comerciante</span>
            </div>
        </div>
        </SwiperSlide>
       
        </Swiper>
    </Section>
  )
}
