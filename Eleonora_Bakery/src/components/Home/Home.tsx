import HeroSection from "../HeroSection/HeroSection";
import About from "../About/Aboout";
import Footer from "../Footer/Footer"
const Home = () => {

    

    return (
        <>
            <div className="flex flex-col  justify-start items-center ">
                <div className=" sm:w-1/2 md:w-1/3 lg:w-1/4 shrink-0 mt-[-7rem] pt-0">
                    <img src="assets/Screenshot_2023-10-09_16-25-36-removebg-preview.png" alt="loading..." />
                </div>


                <div>
                    <HeroSection/>
                </div>

                <div>
                    <About/>        
                </div>

                <div>
                    <Footer/>
                </div>
                


            </div>
        </>
    )
}

//w-[261px] h-[195px] className="bg-[url('assets/Component 5.png')] bg-repeat-x h-[400px] w-screen"

export default Home;