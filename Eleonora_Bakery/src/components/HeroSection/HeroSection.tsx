
import { useState } from "react";
import ContactForm from "../CakeCreator/CakeCreator";
import { Button, Modal } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';
const customTheme: CustomFlowbiteTheme['modal'] = {

    content: {
        inner: "relative rounded-lg bg-[#fffaf1] shadow dark:bg-gray-700 flex flex-col max-h-[90vh]"
    },
    body:{
        base:"p-0  rounded-lg "
    },
    header:{
        close:{
            base:"absolute right-3 inline-flex items-center rounded-xl bg-[#fffaf1]  text-sm text-[#563c2a] hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white ",
            icon: "h-6 w-6"
            
        }
    }
}
const customThemeBtn: CustomFlowbiteTheme['button'] = {
    color:{
        primary: "bg-[#fffaf1] text-[#523724] drop-shadow-md hover:bg-[#FFE8BE] text-xl z-10"
    }
}


const HeroSection = () => {

    const [openModal, setOpenModal] = useState(false);

    function onCloseModal() {
        setOpenModal(false);
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
            <div className=" pl-10  ">
                <h1 className="font-cookie text-[52px] h-35 w-[20rem] pt-5 text-left  leading-[4rem]">
                    Bienbenidos a Elena's Bakery!
                </h1>
                <h3 className="text-white text-left w-[17rem] ">
                    Tu destino para delicias dulces hechas a tu gusto.
                </h3>
                <div className="pt-5">
                    {/* change button colour and text size */}
                    <Button  theme={customThemeBtn} color="primary"  onClick={()=>{setOpenModal(true)}}>Creá tu torta perfecta!</Button>
                    <Modal theme={customTheme} show={openModal} size="md" onClose={onCloseModal} popup>
                        <Modal.Header />
                        <Modal.Body>
                            <ContactForm></ContactForm>
                        </Modal.Body>
                    </Modal>

{/* theme={customThemeBtn} color="primary" */}

                </div>
            </div>
            <div className="bg-no-repeat w-[330px] h-[344px] z-0 absolute right-0 bottom-0" style={{
                backgroundImage:
                    "url('assets/heroSection2.png')",
            }}>

            </div>


        </div>
    )

}

export default HeroSection;