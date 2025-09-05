import dbConnect, { collectionNameObj } from '@/lib/bd_connect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react';

const ServicesDetailsPage = async ({ params }) => {
    const p = await params
    const servicesCollection = dbConnect(collectionNameObj.servicesCollection)
    const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) })
    return (
        <div>
            <section className='flex justify-center items-center my-5'>
                <figure className='relative'>
                    <Image src={"/assets/images/checkout/checkout.png"}
                        width={1137}
                        height={300}
                        alt={"banner"}
                    ></Image>
                    <div className='absolute over-layBg h-full w-full top-0'>
                        <div className=' h-full w-full   flex items-center ps-30'>
                            <div >
                                <h1 className='font-bold text-4xl   text-white'>Service Details</h1>
                            </div>
                        </div>
                    </div>
                </figure>
            </section>
            <section>
                <Image src={data.img}
                    width={752}
                    height={400}
                    alt={data.title}
                ></Image>
                <h1 className='font-bold text-2xl my-2'>{data.title}</h1>.
                <p className='font-light text-neutral'>{data.description}</p>
            </section>
            <h1>{JSON.stringify(data)}</h1>
        </div>
    );
};

export default ServicesDetailsPage;