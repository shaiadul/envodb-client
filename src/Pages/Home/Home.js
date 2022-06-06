import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import 'animate.css';
import Product from '../HomeData/Product';
import Homesection from '../Homesection/Homesection';



const Home = () => {
    
    return (
        <div className='text-center '>
            {/* animate__animated animate__fadeInLeftBig */}
             {/* banner part */}
             <div className='home-container text-center pb-4'>
                <h5 className='text-mine fw-bolder animate__animated animate__jackInTheBox'>Invo||DB Stock Manager !!</h5>
                <Link className='see-link mb-5' to="/management">See More</Link>
            </div>
            <Product></Product>
            <Homesection></Homesection>
        </div>
    );
};

export default Home;