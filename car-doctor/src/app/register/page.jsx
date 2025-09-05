import Image from 'next/image';
import React from 'react';
import RegisterPage from './components/RegisterPage';

const Register = () => {
    return (
        <div className='max-w-5xl mx-auto my-8'>
           <div className='grid grid-cols-1 md:grid-cols-2'>
             <div>
                <Image src={'/assets/images/login/login.svg'} width={460} height={402} alt='login img' ></Image>
            </div>
         <RegisterPage></RegisterPage>
           </div>
        </div>
    );
};

export default Register;