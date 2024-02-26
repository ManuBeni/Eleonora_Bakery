
const Footer = () => {

    var phoneNumber = "+5493515336320"
    var wppLink = "https://wa.me/" + phoneNumber
    var igLink = "https://www.instagram.com/elenasbakery.cba?igsh=MXNqeGs4Nml5Zzkzcw=="

    return(
        <>
        
        <div className="bg-repeat mt-[10rem] md:mt-0 md:pb-[2rem] md:pt-[5rem] h-auto w-screen flex flex-col justifiy-start" style={{
                backgroundImage:
                    "url('assets/Component 7(1).png')",
            }} >

        <div className="self-center">
            <img src="assets/Component 9.png" alt="Loading..." className="object-fill self-center" />
        </div>

        <div className="flex md:justify-around justify-between px-5">
            <a href={wppLink} target="_blank">
            <img src="assets/Component 8.png" alt="Loading..." />
            </a>
            <a href={igLink} target="_blank">
            <img src="assets/Component 10.png" alt="Loading..." />
            </a>      
        </div>


        </div>
        
        </>
    )
}

export default Footer;