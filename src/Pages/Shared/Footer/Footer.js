import { faMapLocation, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className=' bg-footer bg-dark text-white mb-0'>

<div className="row d-flex justify-content-center align-items-start py-4 px-4 gy-4 mx-auto">
    {/* one */}
    <div className="col-lg-3">
        <h3 className='fuText'>Invo||DB</h3>
        <p className='fuP'>This is Our Fast Center of the city. New but not unexperienced. We Have lot of Experience for 15 year since 2010. Join our club and mack a Health Body Fitness !!</p>
        <p>
            <img className='link-icon' src="https://icons-for-free.com/download-icon-fb+logo+social+social+media+social+network+icon-1320191784115198611_0.svg" alt="" />
            <img className='link-icon' src="https://pixlok.com/wp-content/uploads/2021/07/Twitter-Free-Icon-rdfd.png" alt="" />
            <img className='link-icon' src="https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg" alt="" />
            <img className='link-icon' src="https://www.logo.wine/a/logo/Instagram/Instagram-Logo.wine.svg" alt="" /></p>
    </div>
    {/* two */}
    <div className="col-lg-3">
        <h3 className='fuText'>Get In Touch</h3>
        <p>Do not forget our location , please note it and contact us office time.</p>

        <p><FontAwesomeIcon className='faIcon' icon={faMapLocation}></FontAwesomeIcon> 123 Street, New York, USA</p>
        <p><FontAwesomeIcon className='faIcon' icon={faPhone}></FontAwesomeIcon> +012 345 67890</p>
        <p><FontAwesomeIcon className='faIcon' icon={faVoicemail}></FontAwesomeIcon> info@example.com</p>
        
    </div>
    {/* three */}
    <div className="col-lg-3">
        <h3 className='fuText'>Quick Links</h3>
        <ul className='circleType'>
            <li><Link className='quickLink' to="/home">HOME</Link></li>
            <li><Link className='quickLink' to="/management">INVENTORY</Link></li>
            <li><Link className='quickLink' to="/blog">BLOG</Link></li>
            <li><Link className='quickLink' to="/login">LOGIN</Link></li>
        </ul>
        
    </div>
    {/* four */}
    <div className="col-lg-3">
        <h3 className='fuText mb-4'>Get Update ?</h3>
        
        <input className='fuFromSize fuInput' type="name" name="" id="" placeholder='Your Name' />
        <input className='fuFromSize fuInput' type="email" name="" id="" placeholder='Your Email'/>
        <button className='fuFromSize fuFromSubmit'>SUBMIT EMAIL</button>

        
    </div>
</div>

<h5 className='text-center p-3 fufotterText'>© 2019 All Rights Reserved. Design by MD Shaiadul Bashar</h5>
</div>
        </div>
    );
};

export default Footer;