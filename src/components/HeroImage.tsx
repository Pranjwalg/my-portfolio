import logo from "../../public/Pranjwal.jpg";
import Image from "next/image"

const HeroImage = ()  => {



    return(
        <>
          <Image
          src={logo}
          alt="logo"
          loading="eager"
          priority
          height={500}
          width={200}
        />
        </>
    )
}
export default HeroImage