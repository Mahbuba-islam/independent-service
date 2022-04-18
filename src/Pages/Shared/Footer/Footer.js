import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-4 bg-black  ' style={{height:'160px'}}>
           <div className=' mt-5 text-white'>
           <h3 className='mb-5'><small>Angel Project Photography</small></h3>
            <p className='mt-5'><small className='mt-5'>copyright @ {year} </small></p>
         </div> 
        </footer>
    );
};

export default Footer;