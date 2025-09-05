'use client'
import Link from 'next/link';
import React from 'react';
import { FaFacebookSquare, FaGoogle, FaLinkedin } from 'react-icons/fa';

const LoginPage = () => {
    return (
        <div className='border border-gray-300 px-20 py-10 rounded-xl shadow'>
            <form>
                <h1 className='font-bold text-2xl my-8 text-center'>Login</h1>
                <div className='space-y-3 '>
                    <label >Email</label >
                    <input className='p-2 w-full border border-gray-300 rounded-xl' type="email" placeholder='Email' />
                    <label >Confirm Password</label >
                    <input className='p-2 w-full border border-gray-300 rounded-xl' type="password" placeholder='Password' />
                    <button className='btn btn-md mx-auto block text-white w-60 bg-red-500 mt-2 rounded-xl' type='submit'>Sign In</button>
                </div>
            </form>
            <div className=''>
                <h1 className='my-4 text-center'>Or Sign In with</h1>
                <div className='flex justify-center space-x-3 my-3'>
                    <FaFacebookSquare size={20} color='blue' />
                    <FaLinkedin size={20} color='blue' />
                    <FaGoogle size={20} color='red' />
                </div>
                <p className='text-center'>Have an account ? <Link href={'/register'} className='font-bold text-red-500'>Sign up</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;