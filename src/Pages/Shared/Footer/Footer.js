import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-4 bg-black mb-3 p-5 ' style={{height:'160px'}}>
           <div className='  text-white'>
           <h3 className=''><small>Angel Project Photography</small></h3>
            <p className=''><small className='mt-5'>copyright @ {year} </small></p>
         </div> 
        </footer>
    );
};

export default Footer;