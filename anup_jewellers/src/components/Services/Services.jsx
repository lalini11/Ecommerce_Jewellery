import React from 'react';
import { FaCarSide, FaCheckCircle, FaHeadphonesAlt, FaWallet } from 'react-icons/fa';

const ServiceData = [
    {
        id: 1,
        icon: <FaCarSide className='text-4xl md:text-5xl text-red-600'/>,
        title: 'Free Shipping',
        description: 'Free shipping on All Order',
    },
    {
        id: 2,
        icon: <FaCheckCircle className='text-4xl md:text-5xl text-red-600'/>,
        title: 'Safe Money',
        description: '30 days Money Back',
    },
    {
        id: 3,
        icon: <FaWallet className='text-4xl md:text-5xl text-red-600'/>,
        title: 'Secure Payment',
        description: 'All Payment Secure',
    },
    {
        id: 4,
        icon: <FaHeadphonesAlt className='text-4xl md:text-5xl text-red-600'/>,
        title: 'Online Support 24/7',
        description: 'Technical Support 24/7',
    },
]
const Services = () => {
  return (
    <div className='container mt-14 md:mt-20'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8'>
           {ServiceData.map((data)=> (
            <div key={data.id} 
            className='flex flex-col items-start sm:flex-row gap-4 '>
                {data.icon}
                <div className='text-left'>
                    <h1 className='lg:text-xl font-semibold'>{data.title}</h1>
                    <h1 className='text-gary-400 text-5m'>{data.description}</h1>
                </div>
            </div>
           ))}
        </div>
    </div>
  )
}

export default Services;