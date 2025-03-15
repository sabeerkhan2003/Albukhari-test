import React, { useState } from 'react'
import { Icon } from "@iconify/react";

import Nav2 from './Nav2';
import Hero from './Hero';
import Socialicons from './Socialicons';

function Nav() {
    return (
        <>


            <div className='bg-[#07294D] text-white p-2 lg:flex lg:items-center lg:justify-around lg:px-28 md:px-10 lg:h-10 md:h-12  hidden md:flex md:items-center z-50 md:w-full md:top-0 lg:top-0 sticky md:relative lg:relative '>
                <div className='lg:flex lg:justify-center md:flex md:items-center'>
                    <div className='flex flex-col items-center p-4 gap-0 md:'>
                        <span className='flex items-center gap-2 lg:w-60 md:w-48'>
                            <Icon icon="ic:baseline-phone" className='w-4 h-4' />
                            <p className='text-[12px] lg:text-[11px]'>+91-44-22751280 | 22751282</p>
                        </span>
                        <span className='flex items-center gap-2 lg:w-60 md:w-48'>
                            <Icon icon="ic:baseline-email" className='w-4 h-4' />
                            <p className='text-[12px] lg:text-[11px]'>office.kbacollege@gmail.com</p>
                        </span>
                    </div>

                    {/* <div className='grid grid-cols-3 md:grid-cols-2 xl:grid-cols-3 m-3 gap-x-2 gap-y-1 text-center text-[12px]  md:items-center md:w-3/2 '>
                        <span className='border-2 rounded-lg border-yellow-600 px-4 py-1'>Parents</span>
                        <span className='border-2 rounded-lg border-yellow-600 px-4 py-1 '>Students</span>
                        <span className='border-2 rounded-lg border-yellow-600 px-4 py-1 '>Faculty</span>
                        <span className='border-2 rounded-lg border-yellow-600 px-4 py-1 '>Apply Online</span>
                        <span className='border-2 rounded-lg border-yellow-600 px-4 py-1 col-span-full  md:col-span-1'>Diploma in Islamic Studies</span>
                        <span className='border-2 rounded-lg border-yellow-600 px-4 py-1 col-span-full  md:col-span-1'>Al-Bukhari E-Journal</span>
                    </div> */}

                    
                </div>
                <div className='md:mr-10 md:w-full lg:mr-0'>
                
                </div>

                {/* <div className='text-[12px] flex gap-4 md:flex md:flex-row lg:flex-row gap-y-1'>
                    <button className='border-2 h-7 w-24 border-yellow-600'>Apply Now</button>
                    <button className='border-2 h-7 w-24 border-yellow-600'>Login</button>
                </div> */}
                <Socialicons/>
            </div>


            {/* <Hero/> */}



        </>
    );
}

export default Nav;
