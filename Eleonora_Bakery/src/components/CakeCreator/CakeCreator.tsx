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

    <form onSubmit={handleSubmit} className="space-y-4">

      <div>

        <label htmlFor="name" className="block text-sm font-medium text-gray-700">

          Your name

        </label>

        <input

          type="text"

          name="name"

          id="name"

          value={formData.name}

          onChange={handleChange}

          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"

        />

      </div>

      <div>

        <label htmlFor="email" className="block text-sm font-medium text-gray-700">

          Email address

        </label>

        <input

          type="email"

          name="email"

          id="email"

          value={formData.email}

          onChange={handleChange}

          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"

        />

      </div>

      <div>

        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">

          Phone number

        </label>

        <input

          type="tel"

          name="phone"

          id="phone"

          value={formData.phone}

          onChange={handleChange}

          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"

        />

      </div>

      <div>

        <label htmlFor="date" className="block text-sm font-medium text-gray-700">

          Event date

        </label>

        <input

          type="date"

          name="date"

          id="date"

          value={formData.date}

          onChange={handleChange}

          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"

        />

      </div>

      <div>

        <label htmlFor="cakeType" className="block text-sm font-medium text-gray-700">

          Cake type

        </label>

        <select

          name="cakeType"

          id="cakeType"

          value={formData.cakeType}

          onChange={handleChange}

          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"

        >

          <option value="">Select a cake type</option>

          <option value="chocolate">Chocolate</option>

          <option value="vanilla">Vanilla</option>

          <option value="red-velvet">Red Velvet</option>

        </select>

      </div>

      <div>

        <label htmlFor="flavor" className="block text-sm font-medium text-gray-700">

          Flavor

        </label>

        <input

          type="text"

          name="flavor"

          id="flavor"

          value={formData.flavor}

          onChange={handleChange}

          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"

        />

      </div>

      <div>

        <label htmlFor="filling" className="block text-sm font-medium text-gray-700">

          Filling

        </label>

        <input

          type="text"

          name="filling"

          id="filling"

          value={formData.filling}

          onChange={handleChange}

          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"

        />

      </div>

      <div>

        <label htmlFor="size" className="block text-sm font-medium text-gray-700">

          Size

        </label>

        <select

          name="cakeSize"

          id="cakeSize"

          value={formData.cakeSize}

          onChange={handleChange}

          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"

        >

          <option value="">Select a size</option>

          <option value="8-inch">8-inch</option>

          <option value="10-inch">10-inch</option>

          <option value="12-inch">12-inch</option>

        </select>

      </div>

      <div>

        <label htmlFor="message" className="block text-sm font-medium text-gray-700">

          Additional message

        </label>

        <textarea

          name="message"

          id="message"

          value={formData.message}

          onChange={handleChange}

          rows={4}

          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"

        />

      </div>

      <div className="mb-4">

        <label className="block mb-1 text-gray-500">Image</label>

        <input

          type="file"

          className="border border-gray-400 p-2 rounded-lg w-full"

          onChange={handleFileChange}

          required

        />

      </div>

      <div className="flex justify-center mt-5">

        <button

          type="submit"

          className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

        >

          Submit

        </button>

      </div>

    </form>

 );

};



export default BookingForm;