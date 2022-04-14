import React, { useEffect, useState } from 'react';
import Service from '../../Home/service/Service'
import './Services.css'


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div id='service'>

            <h1>Our Services : {services.length}</h1>
            <div className='services-container'>
                {
                    services.map(service => <Service key={service.id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;