import Image from 'next/image';
import React from 'react';
import { FaFacebookSquare, FaGoogle, FaLinkedin } from "react-icons/fa";
import LoginPage from './components/LoginPage';

const LogIn = () => {
    return (
        <div className='max-w-5xl mx-auto my-8'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <Image src={'/assets/images/login/login.svg'} width={460} height={402} alt='login img' ></Image>
                </div>
               <LoginPage></LoginPage>
            </div>
        </div>
    );
};

export default LogIn;