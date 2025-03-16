import React, { useEffect } from 'react';
import Socialicons from './Socialicons';
import logo from '../../assets/Navbar/logo3.png';
import { Icon } from '@iconify/react'; 
import AOS from "aos";
import "aos/dist/aos.css";

const siteMap = [
    { name: 'Home', link: '/' }, { name: 'About Us', link: '/about' }, { name: 'Academic', link: '/academic' }, { name: 'Gallery', link: '/gallery' }, { name: 'E-Journal', link: '/' }, { name: 'Contact Us', link: '/contact' }, 
];

function Footer() {
    
    return (
        <div className='bg-[#07294C] font-Roboto px-5 md:px-3 lg:px-20 lg:grid lg:grid-cols-3 items-start py-8 lg:py-4  h-fit lg:h-[14rem] 2xl:h-[17rem] xl:h-[13rem] lg:pl-10 xl:pl-0 xl:px-0  2xl:px-0 2xl:pl-0 xl:items-center '>
            <div data-aos="fade-up" className=' lg:ml-10 xl:ml-32 2xl:ml-80 mx-5   flex flex-col gap-3 lg:gap-6   md:flex '>
                <img src={logo} alt="logo"  className='w-28 h-28 md:w-36 md:h-36 md:mx-auto xl:mx-0' />
                {/* <p className='font-opensans text-white lg:w-  text-[15px] md:text-[16px] leading-loose '>
                    KBA Arabic College is a 25-years old educational institution founded in 2000 by Alhaj Dr. B.S Abdur Rahman, a Visionary With a Missionary Zeal and run by the All India Islamic Foundation.
                </p> */}
                <div className='lg:relative  pr-10 md:pr-0 lg:mr-36 bottom-2 xl:bottom-4 2xl:bottom-2 md:ml-[40%] lg:ml-10  xl:ml-0 w-[150px]  '>
                    <Socialicons />
                </div>
            </div>
            <div data-aos="fade-up" className='text-white mx-5 lg:px-5 lg:mx-5 xl:px-0 lg:mr-16 xl:mr-52 2xl:mr-80 2xl:-mx-10 2xl:ml-16  flex flex-col md:gap-2 lg:gap-5 xl:gap-5 '>
                <h2 className='text-[20px] md:text-2xl  mb-8 pt-8 lg:mb-0 lg:pt-0  lg:my-5 xl:my-0 2xl:text-3xl font-roboto '>Sitemap</h2>
                <ul className='grid grid-cols-2 w-56 font-roboto  md:grid-cols-3 lg:grid-cols-2 gap-y-2 mr-20 gap-x-0 md:mr-0  lg:mt-0 text-[15px] md:text-[14px] md:pl-10 lg:pl-0 2xl:pt-4'>
                    {siteMap.map((item, index) => (
                        <li className='flex h-7' key={index}>
                            <a href={item.link} className=' hover:text-[#125B9E] hover:scale-x-110 hover:pl-2 hover:transition-all duration-300 2xl:text-xl'>
                                {item.name}
                            </a>
                            <Icon icon="ic:outline-keyboard-arrow-right" width="20" height="20" className='mt-[1px]' style={{ color: '#125B9E' }} />
                        </li>
                    ))}
                </ul>
            </div>

            <div data-aos="fade-up" className='text-white mx-4 flex flex-col gap-y-6 md:gap-6 xl:gap-5 xl:relative xl:right-24 xl:bottom-2 2xl:bottom-1 2xl:mx-0 text-[15px] w-full xl:w-[470px] 2xl:w-[800px] md:text-[16px]  lg:pb-0 lg:px-0 lg:mx-0 lg:gap-[12px]'>
                <h2 className='text-[20px] md:text-2xl font-roboto mb-4 pt-8 lg:mb-0 lg:pt-0  lg:my-5 xl:my-0 2xl:text-3xl '>Contact Us</h2>
                   <div className='flex flex-col gap-4 lg:gap-3 xl:gap-4 md:pl-10 lg:pl-0 2xl:pt-4'>
                <div className='flex items-center lg:items-center gap-3 md:gap-3 lg:gap-4 hover:text-[#125B9E] hover:pl-2 hover:transition-all duration-300  '>
                    <Icon icon="ic:twotone-location-on" width="26" height="26" style={{ color: '#125B9E' }} className='lg:relative lg:right-1 ' />
                    <a href='https://maps.app.goo.gl/NqfMLeiHFmS8kPdr8' className=' w-4/5 md:w-3/4 lg:w-full md:text-[14px] 2xl:text-xl font-roboto'>KBA Arabic College, Crescent Campus, Vandalur, Chennai - 600 048</a>
                </div>
                <div className='flex items-center gap-4 md:gap-4 hover:text-[#125B9E] text-[14px] hover:pl-2 hover:transition-all duration-300'>
                    <Icon icon="ic:baseline-settings-phone" width="20" height="20" style={{ color: '#125B9E' }} />
                    <div className='flex flex-col md:flex-row md:gap-4 2xl:text-xl'>
                        <a href="tel:+914422751280 font-roboto">+91-44-22751280</a>
                        <a href="tel:+914422751282 font-roboto">+91-44-22751282</a>
                    </div>
                </div>
                <div className='flex items-center gap-4 md:gap-4 lg:gap-5 hover:text-[#125B9E] md:text-[14px] hover:pl-2 hover:transition-all duration-300 2xl:text-xl'>
                    <Icon icon="ic:baseline-mail-outline" width="20" height="20" style={{ color: '#125B9E' }} />
                    <a href="mailto:office.kbacollege@gmail.com font-roboto">office.kbacollege@gmail.com</a>
                </div>
                </div> 
            </div>
        </div>
    );
}

export default Footer;


