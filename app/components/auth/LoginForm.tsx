"use client";

import { useEffect, useState } from "react";
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

export const LoginForm = () => {

	const user = false;
	const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    useEffect(() => {
      if(user){
        router.push('/');
        router.refresh();
      }
    }, [router, user]);
    
    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        signIn('credentials', {
            ...data,
            redirect: false
        }).then((callback) => {
            setIsLoading(false);

        if(callback?.ok){
            router.push('/');
            router.refresh();
            toast.success('Sesión iniciada');
        }

        if(callback?.error){
            toast.error(callback.error)
        }
        })
    };    

    if(user){
        return <p className='text-center text-red-600 text-xl lg:text-2xl'>Ya está conectado. Redireccionando...</p>
    };


  return (
    <Section id="register">

      <div className="container mx-auto max-w-[650px]">
        <Heading
            className="md:max-w-md lg:max-w-2xl"
            title="Iniciar sesión"
        />

        <form className="flex flex-col gap-6">
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
                id="password"
                label="Contraseña"
                type="password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />

            <Button onClick={handleSubmit(onSubmit)} className="max-w-[200px]">
                {isLoading ? <Loading /> : "Continuar"}
            </Button>

            <p className='text-sm lg:text-lg text-n-3 mt-10'>
                ¿Aún no tenes una cuenta? <Link href={"/registro"} className='underline md:hover:text-n-1 transition'>Registrate.</Link>
            </p>

            <div className="flex items-center gap-x-3">
                <p>O continúa con</p>
                <button
                className='flex items-center gap-2 text-n-3 md:hover:text-n-1 transition'
                onClick={() => {signIn("google")}}
                >
                <FaGoogle className="border border-primary-dark-grey p-2 rounded-full text-4xl" />
                Google
                </button>
            </div>
            
        </form>
      </div>
      <GradientLight />
    </Section>
  )
}
