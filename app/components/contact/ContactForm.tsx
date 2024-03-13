"use client";

import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";

import { Input } from "../ui/Input"
import { Section } from "../ui/Section"
import { Heading } from "../ui/Heading";
import { Loading } from "../ui/Loading";
import { Button } from "../ui/Button";
import { GradientLight } from "../design/Benefits";
import { robot } from '@/app/assets';

export const ContactForm = () => {

	const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FieldValues>({
      defaultValues: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    });
    
    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        
        console.log(data);
    };

  return (
    <Section id="contact">

      <div className="container mx-auto max-w-[650px]">
      <Heading
          className="md:max-w-md lg:max-w-2xl"
          title={<Fragment>Esperamos tu <span className="bg-gradient-to-r from-primary-bluelight to-primary-green inline-block text-transparent bg-clip-text font-bold">mensaje</span></Fragment>}
        />

        <form className="flex flex-col gap-6">
          <Input 
            id="name"
            label="Nombre"
            type="string"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          
          <Input 
            id="email"
            label="Email"
            type="string"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />

          <Input 
            id="phone"
            label="Telefono"
            type="number"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />

          <Input 
            id="message"
            label="Mensaje"
            textarea
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />

          <Button onClick={handleSubmit(onSubmit)} className="max-w-[200px]">
            {isLoading ? <Loading /> : "Enviar"}
          </Button>
            
        </form>
      </div>
      <GradientLight />
    </Section>
  )
}
