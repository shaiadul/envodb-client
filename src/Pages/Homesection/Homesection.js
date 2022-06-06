import React from 'react';
import useSection from '../../hooks/useSection';
import './Homesection.css'

const Homesection = () => {
    const [sections, setSections] = useSection([])
    return (
        <div className='text-center'>
            {/* section one */}
            <div className=''>
                
                    <h2 className='py-4 banner-doc'>EMPLOY OF THE MONTH !@</h2>
                
                {
                    sections.slice(3, 4).map(section => (
                        <div key={section._id} className=' d-flex row justify-content-center align-items-center mx-auto  text-center '>
                            <div className='col-lg-6'>
                                <img className='w-50 employ-pic' src={section.img} alt="" />
                            </div>
                            <div className='col-lg-6 text-center shadow-lg rounded py-3'>
                                <h1 className='section-name'>{section.name}</h1>
                                <h6>Email: {section.email}</h6>
                                <h6>Phone: {section.Phone}</h6>
                                <small>Supply Aria: {section.location}</small><br />
                                <small className='gray'>Month Target: {section.target} <span>Supplied: {section.supplied}</span></small>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* section two */}
            <h1 className='bg-darking pt-5 feedback'>CLIENT FEEDBACK</h1>
            <div className=' d-flex bg-darking text-white row justify-content-center align-items-start mx-auto py-5 text-center g-4 '>

                {
                    sections.slice(0, 3).map(section => (
                        <div key={section._id} className='col-lg-3 client-style m-2'>
                            <img className='w-75 mb-3 client-img' src={section.img} alt="" />
                            <h3 className='my-3 client-name'>{section.name}</h3>
                            <p>{section.body}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Homesection;