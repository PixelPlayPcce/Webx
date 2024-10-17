import React, { useState } from 'react';
import Image from 'next/image';

const services = [
    {
        id: 1,
        name: 'Home Repair',
        description: 'Expert home repair services for all your needs.',
        image: '/shop1.png',
        location: '123 Main St, Anytown',
        rating: 4.5,
    },
    {
        id: 2,
        name: 'Beauty Salon',
        description: 'Professional beauty services to make you look your best.',
        image: '/shop2.png',
        location: '456 Elm St, Anytown',
        rating: 4.8,
    },
    {
        id: 3,
        name: 'Fitness Trainer',
        description: 'Personalized fitness training to help you achieve your goals.',
        image: '/shop1.png',
        location: '789 Oak St, Anytown',
        rating: 4.7,
    },
    // Add more services as needed
];

const Service = () => {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <div className='h-'>
            <h1 className='text-center text-5xl font-serif mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-[#EBA1FF]'>Local Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-4'>
                {services.map((service) => (
                    <div
                        key={service.id}
                        className='bg-slate-200 rounded-lg p-4 cursor-pointer'
                        onClick={() => setSelectedService(service)}
                    >
                        <Image src={service.image} alt={service.name} width={400} height={300} className='rounded-t-lg' />
                        <h2 className='text-2xl font-bold mt-4'>{service.name}</h2>
                        <p className='text-lg'>{service.description}</p>
                        <p className='text-sm text-gray-600'>{service.location}</p>
                        <p className='text-sm text-yellow-500'>Rating: {service.rating}</p>
                    </div>
                ))}
            </div>

            {selectedService && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
                    <div className='bg-white rounded-lg p-6 w-3/4 md:w-1/2'>
                        <button
                            className='absolute top-4 right-4 text-xl'
                            onClick={() => setSelectedService(null)}
                        >
                            &times;
                        </button>
                        <Image src={selectedService.image} alt={selectedService.name} width={400} height={300} className='rounded-t-lg' />
                        <h2 className='text-3xl font-bold mt-4'>{selectedService.name}</h2>
                        <p className='text-lg'>{selectedService.description}</p>
                        <p className='text-sm text-gray-600'>{selectedService.location}</p>
                        <p className='text-sm text-yellow-500'>Rating: {selectedService.rating}</p>
                        <button className='mt-4 bg-green-500 text-white py-2 px-4 rounded'>Book Now</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Service;