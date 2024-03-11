"use client"

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {disablePageScroll, enablePageScroll} from 'scroll-lock'

import {coloredLogo} from "@/app/assets";
import { navigation } from "@/utils/constants";
import { Button } from "./Button";
import MenuSvg from "@/app/assets/svg/MenuSvg";
import { HamburgerMenu } from "../design/Header";

export const Header = () => {

    const [openNavigation, setOpenNavigation] = useState(false);
    const pathname = usePathname();
    
    const toggleNavigation = () => {
        if(openNavigation){
            setOpenNavigation(false);
            enablePageScroll();
        }else{
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if(!openNavigation) return;
        
        enablePageScroll();
        setOpenNavigation(false);
    };

  return (
    <div className={`fixed top-0 left-0 w-full z-50 border-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'}`}>
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
            <Link href={"/"} className="block w-[12rem] xl:mr-8">
                <img
                    src={coloredLogo.src}
                    alt="todo-computacion-logo"
                    width={190}
                    height={40}
                />
            </Link>

            <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                    {navigation.map(item => (
                        <Link
                            key={item.id}
                            href={item.url}
                            onClick={handleClick}
                            className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? 'lg:hidden' : ''} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold ${pathname === item.url ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50' } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                        > {item.title} </Link>
                    ))}
                </div>
                <HamburgerMenu />
            </nav>

            <Link href={"/registro"} className="button hidden mr-8 text-n-1/50 transition-colors md:hover:text-n-1 lg:block">Registrate</Link>

            <Button className="hidden lg:flex" href="/login">Iniciar sesion</Button>

            <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
                <MenuSvg openNavigation={openNavigation} />
            </Button>
        </div>
    </div>
  )
}
