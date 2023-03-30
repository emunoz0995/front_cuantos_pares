import React from 'react';
import {
    FaUser,

} from 'react-icons/fa';

const Tests = ({ testList }) => {
    return (
        // <div className='flex-col w-[50%] top-[30%] left-[25%] h-[65%] rounded shadow-md  first-letter:h-[80px] flex justify-center items-center px-4 text-gray-700'></div>
        <div className='flex-col w-[95%]  h-[65%] rounded shadow-md  first-letter:h-[80px] flex justify-center items-center px-4 text-gray-700 sm:w-[55%]  sm:h-[65%] md:w-[55%]  md:h-[35%] lg:w-[55%] lg:h-[55%] '>
            <div className='flex'>
                <h2 className='text-4xl mb-10 text-sky-500'>Historial&nbsp;</h2><h2 className='text-4xl mb-10'> de test</h2>
            </div>
            <div className='w-[55%]'>
                <ul className='w-[100%]  h-[200px] overflow-y-scroll'>
                    {testList.map(test => (
                        // <li className='flex w-[95%] justify-between rounded shadow-md bg-white mb-5 p-2' key={test.id}></li>
                        <li className='flex w-[95%] justify-between rounded shadow-md bg-white mb-5 p-2' key={test.id}>
                            <div className='flex justify-center  items-center w-[40%] mr-2'>
                                <FaUser className='rounded-[50%] shadow-md' size={55} />
                            </div>
                            <div className='text-left w-[60%]'>
                                <h1 className=' text-2xl text-sky-500'>{test.name}</h1>
                                <p className=' text-1xl text-gray-400'>Tamaño arreglo: <b>{test.cuantos_pares?.array}</b> </p>
                                <p className=' text-1xl text-gray-400'>Diferencia: <b>{test.cuantos_pares?.difference}</b></p>
                                <p className=' text-1xl text-gray-400'>Pares que cumplen: <b>{test.cuantos_pares?.result}</b></p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Tests;