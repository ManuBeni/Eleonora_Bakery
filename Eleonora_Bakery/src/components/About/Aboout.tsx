const About = () => {

    const text = "{Más sobre nosotros}"

    return(
        <>
        <h1 className="font-cookie text-[#523724] text-[40px] mt-[71px]">{text}</h1>


        <div className=" flex flex-col justify-start items-center">

        <img src="assets/jennie-brown-MKBoRZEGeiM-unsplash-removebg-preview.png" alt="loading..." className=" z-0 w-[350px] mb-[-15rem] drop-shadow-xl"/>
        </div>        

        <div className="h-[472px] bg-[#f1cacb] w-screen mt-20"/>

        <div className="h-[472px] bg-[#eaa6a5] w-screen mt-[-20rem] rounded-xl text-left p-4 pt-1 font-medium">
        <br />
        <p>
        Conoce a Lourdes Eleonora, nuestra joven y apasionada pastelera autodidacta, cuyo amor por la creación de delicias dulces no tiene límites. Su trayectoria comenzó en una pequeña cocina, con el sueño de compartir sus creaciones deliciosas con el mundo. Lo que comenzó como un pequeño proyecto de pasión se convirtió rápidamente en Elena's Bakery, tu destino de confianza para pasteles artesanales y golosinas.
        </p>
        <br/>
        <p>
        Ya sea una ocasión especial o un simple antojo, Lourdes está siempre lista para preparar algo extraordinario para ti. Ella cree que cada postre tiene una historia que contar, y está aquí para hacer tus momentos más dulces. En Elena's Bakery, no se trata solo de la comida; se trata del amor y la pasión que se ponen en cada bocado.
    
        </p>
        
        </div>

        </>
    )
}

export default About;