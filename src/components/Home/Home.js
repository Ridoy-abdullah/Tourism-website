import React from 'react';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import Resort from '../Resort/Resort';
import Sports from '../Sports/Sports';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <Resort></Resort>
            <Sports></Sports>
            
        </div>
    );
};

export default Home;