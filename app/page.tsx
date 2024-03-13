import { Benefits } from "./components/homepage/Benefits"
import { Collaboration } from "./components/homepage/Collaboration"
import { Hero } from "./components/homepage/Hero"
import { Reviews } from "./components/homepage/Reviews"

const HomePage = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <Collaboration />
      <Reviews />
    </>
  )
}

export default HomePage