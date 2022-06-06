import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './MyItem.css'

const MyItem = () => {
    const navigate = useNavigate();
    // user information
    const [user] = useAuthState(auth)
    // fetch items data 
    const [items, setItems] = useState([]);
    
    const pic = user.photoURL;

    // useEffect by axios.get  
    useEffect(() => {
        const getItems = async () => {
            // get email by user
            
            const email = user.email;
            const url = `https://obscure-temple-73914.herokuapp.com/items?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setItems(data);
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        // must call function
        getItems();
    }, [user])
    return (
        <div className='my-5 text-center'>
{/* className='d-flex row justify-content-center align-items-center mx-auto py-5 text-center' */}
            <div className='d-flex row justify-content-between w-100 header-title mx-auto text-white'>
                <span className='col-lg-3 col-md-3 col-sm-3 col-3 fs-5  rounded  header-text'>NAME</span>
                <span className='col-lg-6 col-md-6 col-sm-6 col-7 fs-5  rounded  header-text'>EMAIL</span>
                <span className='col-lg-3 col-md-3 col-sm-3 col-2 fs-5  rounded  header-text'>IMG</span>
            </div>
            {
                items.map(item =>
                    <div key={item._id} className='d-flex row justify-content-between w-100 header-title mx-auto gx-2'>
                <span className='col-lg-3 col-md-3 col-sm-3 col-3   rounded datas'>{item.name}</span>
                <span className='col-lg-6 col-md-6 col-sm-6 col-7   rounded datas'>{item.email}</span>
                <span className='col-lg-3 col-md-3 col-sm-3 col-2   rounded datas'><img className='item-img' src={pic ? pic : 'https://cdn-icons-png.flaticon.com/512/21/21104.png'} alt="" /></span>
            </div>
                )
            }
            
        </div>



    );
};

export default MyItem;