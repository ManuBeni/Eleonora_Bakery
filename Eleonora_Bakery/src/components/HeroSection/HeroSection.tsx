
import { useRef } from "react";
import ContactForm from "../CakeCreator/CakeCreator";
const HeroSection = () => {

    const ref = useRef<null | HTMLDivElement>(null)

    const handleCLick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="relative bg-repeat-x mt-[-3rem] pt-0 h-[343px] w-screen flex flex-row justify-between sm:justify-center"
            style={{
                backgroundImage:
                    "url('assets/Component 5(actual).png')",
            }}  >
            <div className="bg-no-repeat w-[330px] h-[344px] hidden md:flex absolute left-0 bottom-0" style={{
                backgroundImage:
                    "url('assets/heroSection1.png')",
            }} >
            </div>
            <div className="   ">
                <h1 className="font-cookie text-[52px] h-35 w-[20rem] pt-5 text-left pl-10 leading-[4rem]">
                    Bienbenidos a Elena's Bakery!
                </h1>
                <h3 className="text-white text-left w-[17rem] pl-10">
                    Tu destino para delicias dulces hechas a tu gusto.
                </h3>
                <div className="relative w-[192px] group">
                    <input onChange={handleCLick} type="checkbox"
                        className=" mt-6
                                absolute top-0 inset-x-0
                                w-full h-11 z-10 
                                ml-10 
                                transition ease-in-out delay-150  
                                group-hover:-translate-y-1 group-hover:scale-110  
                                duration-300
                                opacity-0
                                cursor-pointer
                                peer

                        "></input>
                    <div
                        className="bg-white hover:bg-[#fffaf1] 
                                            w-full absolute mt-6
                                            transition ease-in-out delay-150  
                                            group-hover:-translate-y-1 group-hover:scale-110  
                                            duration-300 px-3 ml-10 text-[#513623] 
                                            shadow-md py-2 rounded-md flex justify-self-start 
                        ">
                        Creá tu torta perfecta!
                    </div>



                    <div
                        className="
                                        sm:w-[19.5rem]
                                        w-screen
                                        max-h-0 
                                        peer-checked:max-h-[2000px]
                                        overflow-hidden 
                                        transition-all duration-1000
                                        
                                        ">
                        <div className="mt-[9.19rem] justify-self-start bg-[#fffaf1h] pt-0 ">
                            <ContactForm />
                        </div>

                    </div>



                </div>
            </div>
            <div className="bg-no-repeat w-[330px] h-[344px] absolute right-0 bottom-0" style={{
                backgroundImage:
                    "url('assets/heroSection2.png')",
            }}>

            </div>


        </div>
    )

}

export default HeroSection;