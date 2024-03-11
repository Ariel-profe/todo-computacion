import { FC, ReactNode } from "react";
import Link from "next/link";

import ButtonSvg from "@/app/assets/svg/ButtonSvg";

interface Props {
  className?: string;
  href?: string;
  onClick?: () => void;
  children?: ReactNode;
  px?: string;
  white?: boolean;
};

export const Button:FC<Props> = ({children, className, href = '', onClick, px, white = false}) => {

  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors md:hover:text-primary-bluelight ${px || 'px-7'} ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`;

  const spanClasses = `relative z-10`;

  const renderLink = () => (
    <Link href={href} className={classes}>
      <span className={spanClasses}> {children} </span> 
      {ButtonSvg(white)}
    </Link>
  )

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}> {children} </span>
      {ButtonSvg(white)}
    </button>
  )

  return href
    ? renderLink()
    : renderButton()
}
