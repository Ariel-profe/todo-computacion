import { companyLogos } from "@/utils/constants"

export const CompanyLogos = ({className = ''}:{className:string}) => {
  return (
    <div className={className}>
        <h5 className="tagline mb-6 text-center text-n-1/50">Quienes nos acompañan en cada <span className="text-primary-bluelight font-semibold">momento</span></h5>
        <ul className="flex">
            {companyLogos.map((logo, index) => (
                <li key={index} className="flex items-center justify-center flex-1 h-[8.5rem]">
                    <img src={logo.src} alt={logo.src} width={134} height={28} />
                </li>
            ))}
        </ul>
    </div>
  )
}
