import dbConnect, { collectionNameObj } from '@/lib/bd_connect';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServicesSection = async () => {
    // const res= fatch ('/services.json')
    const Servicesclection = dbConnect(collectionNameObj.servicesCollection)
    const data = await Servicesclection.find({}).toArray()
    return (
        <div className='max-w-5xl mx-auto my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 '>
                {data.map((item) => {
                    return (
                        <div key={item._id} className='shadow-xl p-5 rounded-2xl'>
                            <div>
                                <Image src={item.img} width={300} height={108} alt='' className='w-full h-50 object-fit'></Image>
                            </div>
                        <div className='flex justify-between items-center'>
                            <div className='mt-2 gap-2'>
                                <h1 className='text-lg font-bold'>{item.title}</h1>
                            <p className= 'text-amber-400 text-lg font-bold'>Price : $ {item.price}</p>
                            </div>
                            <div>
                                <Link  href={`/services/${item._id}`} className='btn bg-amber-400 text-white font-bold rounded-2xl mt-3'>See more</Link>
                            </div>
                        </div>
                        </div>
                        
                    )
                })}
            </div>
             <button className='btn border-red-400 rounded-xl mx-auto block mt-10'>More Services</button>
        </div>
    );
};

export default ServicesSection;