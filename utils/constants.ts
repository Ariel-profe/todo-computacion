import {
  benefitCard1,
    benefitCard2,
    benefitCard3,
    benefitCard4,
    benefitCard5,
    benefitCard6,
    benefitIcon1,
    benefitIcon2,
    benefitIcon4,
    benefitImage2,
    chromecast,
    disc02,
    discordBlack,
    facebook,
    instagram,
    notification2,
    notification3,
    notification4,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    sliders04,
    telegram,
    twitter,
    yourlogo,
    notebook,
    backpack,
    cable,
    headphone,
    keyboard,
    memory,
    screen,
    mouse
  } from "@/app/assets";
import { IHeroIcons } from "@/interfaces/constantsInterfaces";

import { GrPrint } from "react-icons/gr";
import { MdOutlineLaptopMac, MdOutlineMouse } from "react-icons/md";
import { PiHeadphones } from "react-icons/pi";
  
  export const navigation = [
    {
      id: "0",
      title: "Productos",
      url: "/productos",
    },
    {
      id: "1",
      title: "Nosotros",
      url: "/nosotros",
    },
    {
      id: "2",
      title: "Mundo Tech",
      url: "/mundo-tech",
    },
    {
      id: "3",
      title: "Contacto",
      url: "/contacto",
    },
    {
      id: "4",
      title: "Registro",
      url: "/registro",
      onlyMobile: true,
    },
    {
      id: "5",
      title: "Login",
      url: "/login",
      onlyMobile: true,
    },
  ];
  
  export const heroIcons:IHeroIcons[] = [
    {
      id: 1,
      icon: MdOutlineLaptopMac,
      href: '/notebooks' 
    },
    {
      id: 2,
      icon: MdOutlineMouse,
      href: '/accesorios' 
    },
    {
      id: 3,
      icon: GrPrint,
      href: '/notebooks' 
    },
    {
      id: 4,
      icon: PiHeadphones ,
      href: '/notebooks' 
    },
  ];
  
  export const notificationImages = [notification4, notification3, notification2];
  
  export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];
  
  export const tcServices = [
    "Gráficos potenciados",
    "Velocidad asegurada",
    "Rendimiento de excelencia",
  ];
  
  export const tcServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
  ];

  const selectedMonth = {
    1: 'Enero',
    2: 'Febrero',
    3: 'Marzo',
    4: 'Abril',
    5: 'Mayo',
    6: 'Junio',
    7: 'Julio',
    8: 'Agosto',
    9: 'Septiembre',
    10: 'Octubre',
    11: 'Noviembre',
    12: 'Diciembre'
  }
  
  export const roadmap = [
    {
      id: "1",
      title: "Venta de productos y accesorios",
      text: "Ofrecemos la más amplia gama de productos y accesorios que podes encontrar en materia tecnológica.",
      status: "progress",
      imageUrl: roadmap2,
      colorful: true,
    },
    {
      id: "0",
      title: "Atención al cliente",
      text: "Tu confianza en nosotros es lo que nos permite crecer día a día, haciéndote sentir parte de nuestro equipo.",
      status: "done",
      imageUrl: roadmap1
    },
    {
      id: "2",
      title: "Soporte Técnico",
      text: "Te ayudamos a diagnosticar y solucionar problemas relacionados con harware, software o sistemas en general.",
      status: "done",
      imageUrl: roadmap3,
    },
    {
      id: "3",
      title: "Relaciones comerciales",
      text: "Garantizamos un flujo constante de stock de productos al relacionarnos con las empresas más grandes del mercado.",
      status: "progress",
      imageUrl: roadmap4,
    },
  ];
  
  export const collabText =
    "Para diseñar y desarrollar un producto que solucione los problemas de la vida cotidiana.";
  
  export const collabContent = [
    {
      id: "0",
      title: "Calidad",
      text: collabText,
    },
    {
      id: "1",
      title: "Conectividad",
    },
    {
      id: "2",
      title: "Seguridad",
    },
  ];
  
  export const productsToSell = [
    {
      id: "0",
      title: "Notebooks",
      icon: notebook
    },
    {
      id: "1",
      title: "Conectividad",
      icon: cable
    },
    {
      id: "2",
      title: "Auriculares",
      icon: headphone
    },
    {
      id: "3",
      title: "Teclados",
      icon: keyboard
    },
    {
      id: "4",
      title: "Memorias",
      icon: memory
    },
    {
      id: "5",
      title: "Mouses",
      icon: mouse
    },
    {
      id: "6",
      title: "Pantallas",
      icon: screen
    },
    {
      id: "7",
      title: "Mochilas",
      icon: backpack
    },
  ];
  
  export const aboutValues = [
    {
      id: "0",
      title: "Misión",
      description: "Nuestra razon de ser, propósitos y enfoques de nuestras operaciones",
      features: [
        "Satisfascer las necesidades de nuestros clientes",
        "Ofrecer el mejor servicio pre y post venta",
        "Otorgar los productos de mejor calidad en el mercado",
      ],
    },
    {
      id: "1",
      title: "Visión",
      description: "Nuestro faro motivador que nos impulsa a seguir creciendo",
      features: [
        "Convertirnos en la empresa más grande de venta de productos",
        "Acelerar la transición hacia el mundo tech",
        "Posicionarnos en mercados nacionales e internacionales",
      ],
    },
    {
      id: "2",
      title: "Valores",
      description: "Los principios y creencias que rigen nuestras acciones",
      features: [
        "Trabajo en equipo: cultura de calidez y pertenencia",
        "Perseverancia: coraje para hacer crecer la empresa.",
        "Integridad entre nosotros y con otras empresas",
      ],
    },
  ];
  
  export const benefits = [
    {
      id: "0",
      title: "Atención al cliente",
      text: "Establecemos puntos de contacto con los clientes, a través de diferentes canales, para establecer relaciones con ellos, antes, durante y después de la venta.",
      backgroundUrl: benefitCard1,
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
    {
      id: "1",
      title: "Servicio técnico",
      text: "Respondemos las dudas de los clientes sobre el producto o servicio que adquirieron y poder asi solucionar problemas y aprovechar al máximo todos sus recursos.",
      backgroundUrl: benefitCard2,
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "2",
      title: "Conectividad",
      text: "Creamos una comunicación o vínculo entre diferentes dispositivos, bien sea a través de dispositivos que se conectan a través de cables como también de manera inalámbrica.",
      backgroundUrl: benefitCard3,
      iconUrl: benefitIcon4,
      imageUrl: benefitImage2,
    },
    {
      id: "3",
      title: "Ventas y stock",
      text: "Solucionamos las necesidades de nuestros clientes ofreciendo la mayor amplitud de stock de productos, accesorios y marcas, para que puedan realizar sus tareas con nuestro soporte tecnológico.",
      backgroundUrl: benefitCard4,
      iconUrl: benefitIcon4,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "4",
      title: "Trayectoria",
      text: "Contamos con 30 años de experiencia en el mercado. Sabemos que es lo que necesitan las personas cuando requiren los productos más actuales, de confianza y con el mejor rendimiento posible.",
      backgroundUrl: benefitCard5,
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
    {
      id: "5",
      title: "Responsabilidad",
      text: "Cumplimos nuestros objetivos de una manera eficiente y oportuna. Cuidamos a nuestros clientes de la mejor manera posible para entablar una relación de confianza que impulse a ambas partes al mundo tecnológico.",
      backgroundUrl: benefitCard6,
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
    },
  ];
  
  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: "#",
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: "#",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "#",
    },
    {
      id: "3",
      title: "Telegram",
      iconUrl: telegram,
      url: "#",
    },
    {
      id: "4",
      title: "Facebook",
      iconUrl: facebook,
      url: "#",
    },
  ];