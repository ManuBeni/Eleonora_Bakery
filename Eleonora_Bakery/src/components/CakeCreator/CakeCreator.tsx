import React, { useState } from 'react';


interface FormData {

  name: string;

  email: string;

  phone: string;

  date: string;

  cakeType: string;

  structuredFilling: string;

  filling: string;

  cakeSize: string;

  cover: string;

  decor: string;

  message: string;


}


const initialFormData: FormData = {

  name: '',

  email: '',

  phone: '',

  date: '',

  cakeType: '',

  structuredFilling: '',

  filling: '',

  cakeSize: '',

  cover: '',

  decor: '',

  message: '',


};

const blocks = "my-2 py-3 pl-2 placeholder-[#FFE8BE] block w-full rounded-md font-medium border-gray-300 bg-[#563c2a] shadow-sm focus:border-black focus:ring-black sm:text-sm text-[#FFE8BE]"
const textFromBlock = "block pl-1 text-4xl font-bold font-cookie text-[#563c2a] mt-1 text-left"


const BookingForm: React.FC = () => {

  const [formData, setFormData] = useState(initialFormData);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {

    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });

  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    var phoneNumber = "+5493515336320"

    var url = "https://wa.me/" + phoneNumber + "?text=" + "*Hola! Mi pedido de torta es el siguiente :*" + "%0a%0a" + "*Contacto :*" + "%0a" +
    "*Nombre :* " + formData.name + "%0a" +
    "*E-mail :* " + formData.email + "%0a" +
    "*Teléfono :* " + formData.phone + "%0a" +
    "*Fecha :* " + formData.date + "%0a%0a" +
    "*Torta :* "+ "%0a" + 
    "*Tamaño :* " + formData.cakeSize + "%0a" +
    "*Sabor del bizcochuelo :* " + formData.cakeType + "%0a" +
    "*Relleno con estructura :* " + formData.structuredFilling + "%0a" +
    "*Relleno de crema :* " + formData.filling + "%0a" +
    "*Cobertura :* " + formData.cover + "%0a" +
    "*Decoración :* " + formData.decor + "%0a" +
    "*Especifiaciónes Adicionales:* " + formData.message;

    window.open(url, '_blank')?.focus();

    console.log('Form data:', formData);

    // Send the form data to your server or another service

  };


  return (
    <>
      <div className='pt-0 mt-[-17px] rounded-lg bg-[#fffaf1]'>
        <img className="rounded-lg" src="assets/ice-cream-chocolate-bar-melting-stock-photography-chocolate-9c9f348e344548120f755219fa59b8b4.png" alt="loading..." />
      </div>

      <form onSubmit={handleSubmit} className=" flex flex-col pr-0 pr-6 pl-6 mt-[-1.2rem] bg-[#fffaf1]">


        <div>


          <label htmlFor="date" className={textFromBlock}>

            Información de Contacto

          </label>


          <input

            placeholder='Tu Nombre'
            type="text"

            name="name"

            id="name"

            value={formData.name}

            onChange={handleChange}

            className={blocks}


          />

        </div>

        <div>

          <input

            placeholder='Email'

            type="email"

            name="email"

            id="email"

            value={formData.email}

            onChange={handleChange}

            className={blocks}

          />

        </div>

        <div>



          <input

            placeholder='Número de teléfono'

            type="tel"

            name="phone"

            id="phone"

            value={formData.phone}

            onChange={handleChange}

            className={blocks}
          />

        </div>

        <div>

          <label htmlFor="date" className={textFromBlock}>

            Fecha del evento

          </label>

          <input

            type="date"

            name="date"

            id="date"

            value={formData.date}

            onChange={handleChange}

            className={blocks}
          />

        </div>

        <div>


          <label htmlFor="cakeSize" className={textFromBlock}>

            Especificaciones

          </label>

          <select

            name="cakeSize"

            id="cakeSize"

            value={formData.cakeSize}

            onChange={handleChange}

            className={blocks}

          >

            <option value="">Tamaño</option>

            <option value="Grande - 20 cm">Grande - 20 cm</option>

            <option value="Mediano - 18 cm">Mediano - 18 cm</option>

            <option value="Chico - 10 cm">Chico - 10 cm</option>

          </select>

        </div>

        <div>

          <select

            name="cakeType"

            id="cakeType"

            value={formData.cakeType}

            onChange={handleChange}

            className={blocks}

          >

            <option value="">Sabor del bizcochuelo</option>

            <option value="Chocolate">Chocolate</option>

            <option value="Vanilla">Vanilla</option>

            <option value="Limon">Limón</option>

          </select>

        </div>


        <div>

          <select

            name="structuredFilling"

            id="structuredFilling"

            value={formData.structuredFilling}

            onChange={handleChange}

            className={blocks}

          >

            <option value="">Relleno con estructura</option>

            <option value="DDL-chips">Dulce de leche con chips de chocolate</option>

            <option value="DDL-oreo">Dulce de leche con oreos</option>

            <option value="DDL-nueces">Dulce de leche con nueces</option>

            <option value="Crema-Bariloche">Crema Bariloche</option>

            <option value="Ganache-Blanco">Ganache de chocolate blanco</option>

            <option value="Ganache-Negro">Ganache de chocolate negro</option>

          </select>

        </div>

        <div>

          <select

            name="filling"

            id="filling"

            value={formData.filling}

            onChange={handleChange}

            className={blocks}

          >

            <option value="">Relleno de crema</option>

            <option value="Café">Café</option>

            <option value="Mocca">Mocca</option>

            <option value="Chocotorta">Chocotorta</option>

            <option value="Oreo">Oreo</option>

            <option value="Durazno">Con Duraznos</option>

            <option value="Cheese">Cheese (base de queso crema con vainilla)</option>

          </select>

        </div>

        <div>

          <select

            name="cover"

            id="cover"

            value={formData.cover}

            onChange={handleChange}

            className={blocks}

          >

            <option value="">Cobertura</option>

            <option value="Butter-Cream">Butter cream</option>

            <option value="Ganache-Chocolate">Ganache de chocolate</option>

          </select>

        </div>


        <div>

          <select

            name="decor"

            id="decor"

            value={formData.decor}

            onChange={handleChange}

            className={blocks}

          >

            <option value="">Decoración</option>

            <option value="Drip-Ch-Blanco c/ Picos">Drip de chocolate blanco con picos de relleno</option>

            <option value="Drip-Ch-Negro c/ Picos">Drip de chocolate negro con picos de relleno</option>

            <option value="A Pedido">A pedido (enviar fotos de ejemplo)</option>

          </select>

        </div>

        <div>

          <label htmlFor="message" className={textFromBlock}>

            Especifiaciones adicionales

          </label>

          <textarea

            name="message"

            id="message"

            value={formData.message}

            onChange={handleChange}

            rows={4}

            className={blocks}

          />

        </div>


        <div className="flex justify-center mt-5">

          <button

            type="submit"

            className="inline-flex drop-shadow-md items-center px-6 py-3 mb-7 hover:bg-[#e67372] text-base font-medium rounded-md text-[#563c2a] bg-[#ee9e9d] text-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

          >

            Enviar

          </button>


        </div>

      </form>
    </>
  );

};



export default BookingForm;