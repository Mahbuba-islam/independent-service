import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <h1 className='text-center text-primary'>Angel Project Photography</h1>
            <Banner></Banner>
            <Services></Services>
            
           
        </div>
    );
};

export default Home;