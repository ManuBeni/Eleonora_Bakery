import React, { useState } from 'react';


interface FormData {

 name: string;

 email: string;

 phone: string;

 date: string;

 cakeType: string;

 flavor: string;

 filling: string;

 cakeSize: string;

 message: string;

 image: File | null;

}


const initialFormData: FormData = {

 name: '',

 email: '',

 phone: '',

 date: '',

 cakeType: '',

 flavor: '',

 filling: '',

 cakeSize: '',

 message:'',

 image: null,

};

const blocks = "my-2 py-3 pl-2 placeholder-[#ee9e9d] block w-full  font-medium border-gray-300 bg-[#563c2a] shadow-sm focus:border-black focus:ring-black sm:text-sm text-[#ee9e9d]"
const textFromBlock = "block pl-1 text-xl font-bold text-slate-50 mt-1 text-left"


const BookingForm: React.FC = () => {

 const [formData, setFormData] = useState(initialFormData);


 const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {

    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });

 };


 const handleFileChange = (event: React.ChangeEvent<HTMLInputElement >) => {

    const file = event.target.files ? event.target.files[0] : null;

    setFormData({ ...formData, image: file });

 };


 const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    console.log('Form data:', formData);

    // Send the form data to your server or another service

 };


 return (
<>
  <div className='pt-0 mt-0 '>
    <img src="public/assets/ice-cream-chocolate-bar-melting-stock-photography-chocolate-9c9f348e344548120f755219fa59b8b4.png" alt="loading..." />
  </div>

    <form onSubmit={handleSubmit} className=" pb-10 flex flex-col pr-0 pl-0 h-max mt-[-50px] ">


      <div>

        

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

        placeholder='Número de contacto'

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

       

        <select

          name="cakeType"

          id="cakeType"

          value={formData.cakeType}

          onChange={handleChange}

          className={blocks}

        >

          <option value="">Seleccioná un tipo de torta</option>

          <option value="chocolate">Chocolate</option>

          <option value="vanilla">Vanilla</option>

          <option value="red-velvet">Red Velvet</option>

        </select>

      </div>

      <div>

        

        <input

          placeholder='Sabor'

          type="text"

          name="flavor"

          id="flavor"

          value={formData.flavor}

          onChange={handleChange}

          className={blocks}

        />

      </div>

      <div>

        

        <input

        placeholder='Relleno'

          type="text"

          name="filling"

          id="filling"

          value={formData.filling}

          onChange={handleChange}

          className={blocks}

        />

      </div>

      <div>

        <select

          name="cakeSize"

          id="cakeSize"

          value={formData.cakeSize}

          onChange={handleChange}

          className={blocks}

        >

          <option value="">Select a size</option>

          <option value="8-inch">8-inch</option>

          <option value="10-inch">10-inch</option>

          <option value="12-inch">12-inch</option>

        </select>

      </div>

      <div>

        <label htmlFor="message" className={textFromBlock}>

          Especificaciones adicionales

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

      <div className="mb-4">

        <label className={textFromBlock}>Imagen</label>

        <input

          type="file"

          className="border border-[#513623] p-2 rounded-lg w-full text-[#664e3d] "

          onChange={handleFileChange}

          required

        />

      </div>
      

      <div className="flex justify-center mt-5">

        <button

          type="submit"

          className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

        >

          Enviar

        </button>
        

      </div>

    </form>
    </>
 );

};



export default BookingForm;