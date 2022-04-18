import React, {useState, useEffect} from 'react';
import Service from '../Home/Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    
    useEffect (()=>{
        fetch('service.json')
        .then(res => res.json())
        .then(data => setServices(data));

    },[])
    return (
        <div id='services'>
            <h2 className='title'>Our Services</h2>
            <div className="services-container">
            {
                services.map(service => <Service key={service._id} service = {service}>
                </Service>)
            }
            </div>

        </div>
    );
};

export default Services;