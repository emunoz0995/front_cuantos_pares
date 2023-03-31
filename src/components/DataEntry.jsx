import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
    FaGithub,
    FaLinkedin,
    FaWhatsapp,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Swal from 'sweetalert2';



const DataEntry = ({ getTests }) => {

    const { handleSubmit, register, reset } = useForm()

    const initialSelected = {
        name: "",
        array: "",
        difference: ""

    }

    const submit = (data) => {
        axios.post('https://api-cuantos-pares-production.up.railway.app/api/visitors', data)
            .then(() => {
                getTests(
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Test creado correctamente',
                        showConfirmButton: false,
                        timer: 3000
                    }),
                );
            });
        reset(initialSelected)
    }

    return (
        // <div className='flex-col sm:w-[25%] h-[100%px] p-10 rounded shadow-md shadow-sky-500 first-letter:h-[80px] flex justify-center items-center px-4 bg-[#ffffff] text-gray-700'></div>
         <div className='flex-col w-[85%] h-[50%] p-10 rounded shadow-md shadow-sky-500 first-letter:h-[80px] flex justify-center items-center px-4 bg-[#ffffff] text-gray-700 mt-2 sm:w-[45%] sm:h-[40%] sm:ml-3 md:w-[55%] md:h-[35%] md:ml-10 lg:w-[25%] lg:h-[55%] ' >
            <div className='flex'>
                <h2 className='text-4xl mb-10 text-sky-500'>Ingresar&nbsp;</h2><h2 className='text-4xl mb-10'>datos</h2>
            </div>
           
                <form className="flex flex-col" onSubmit={handleSubmit(submit)} action="">
                    <div className="flex flex-col text-left">
                        <p className='text-gray-400'>Nombre visitante:</p>
                        <input className='rounded border border-sky-200' type="text" {...register('name')} id='name' />
                    </div>
                    <div className="flex flex-col text-left  ">
                        <p className='text-gray-400'>Tamaño arreglo:</p>
                        <input className='rounded border border-sky-200' type="text  " {...register('array')} id='array' />
                    </div>
                    <div className="flex flex-col text-left">
                        <p className='text-gray-400'>Diferencia:</p>
                        <input className='rounded border border-sky-200' type="text  " {...register('difference')} id='difference' />
                    </div>
                    <div className="flex mt-4 h-8  justify-center  ">
                        <button className='bg-sky-500  w-[50%] rounded text-white hover:bg-sky-700 shadow-md shadow-gray-500'>probar</button>
                    </div>

                </form>
            
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex  items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300' target="_blank"
                            href='https://www.linkedin.com/in/edison-954095176/'
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300' target="_blank"
                            href='https://github.com/emunoz0995?tab=repositories'
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#c9842b]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300' target="_blank"
                            href='mailto:javicho16_mu@hotmail.com'
                        >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#31ab43]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300' target="_blank"
                            href='https://api.whatsapp.com/send/?phone=593980594828&text=Hola+me+interesa+contactarme+contigo&type=phone_number&app_absent=0'
                        >
                            Whatsapp <FaWhatsapp size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DataEntry;