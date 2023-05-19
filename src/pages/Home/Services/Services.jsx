import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import ServicesCard from '../ServicesCard/ServicesCard';

const Services = () => {

    

    
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])



    return (
        <div className='mt-4'>
            <div className='text-center'>
                <h3 className="text-2xl tet-bold text-orange-600">our services</h3>
                <h2 className='text-5xl'>our service area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service=> <ServicesCard
                    key={service._id}
                    service = {service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;