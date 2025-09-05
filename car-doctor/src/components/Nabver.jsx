import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Nabver = () => {
    const navMenu =
        < >
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/About'}>About</Link></li>
            <li><Link href={'/Services'}>Services</Link></li>
            <li><Link href={'/Blog'}>Blog</Link></li>
            <li><Link href={'/Contact'}>Contact</Link></li>
        </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                           {navMenu}
                        </ul>
                    </div>
                    <Link href={'/'} className=" text-xl">
                        <Image src={'/assets/logo.svg'} width={50} height={50}  alt=''></Image>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                { navMenu}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                <div className='flex justify-between items-center gap-2 lg:gap-4'>
                    <Link href={'/logIn'} className='btn btn-sm rounded-xl text-md'>Login</Link>
                    <Link href={'/register'} className='btn btn-sm rounded-xl text-md'>Register</Link>
                </div>
                    <a className="btn border-red-400 rounded-xl ">Appointment</a>
                </div>
            </div>
        </div>
    );
};

export default Nabver;