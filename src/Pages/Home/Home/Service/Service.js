import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id, name, image, description, price} = service;
    const navigate = useNavigate();

    const handleToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className='service-container'>
            <img className='w-100' src={image} alt="" />
            <h2>{name}</h2>
            <p> ${price}</p>
            <p>{description}</p>
            <button onClick={() => handleToServiceDetail(id)} className='btn '>Book: {name}</button>
        </div>
    );
};

export default Service;