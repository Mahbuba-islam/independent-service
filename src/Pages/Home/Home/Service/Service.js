import React from 'react';
import { Link } from 'react-router-dom';

import './Service.css';

const Service = ({service}) => {
    const { name, img, description, price} = service;
   
    
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <Link to="/serviceDetails">
          <button className='btn btn-primary'>Get offer</button>
             </Link>
        </div>
    );
};

export default Service;