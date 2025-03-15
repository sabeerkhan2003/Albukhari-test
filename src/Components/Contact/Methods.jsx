import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

function Methods() {
    return (
        <div className='bg-white text-[#505050] font-Roboto md:w-[90%] lg:w-[90%] border flex flex-col gap-8 py-20 shadow-xl rounded-lg lg:py-12 pl-10 '>
            <div className='flex items-center lg:items-center gap-3 md:gap-3 hover:text-[#1C315E]'>
                <Icon icon="lucide:university" width="24" height="24" className='lg:relative md:w-10  lg:w-12 lg:h-12 w-8 h-8 text-[#1C315E]' />
                <div>
                    <p className='font-semibold '>Kilakarai Bukhari Aalim Arabic College</p>
                    <p className='w-2/3'>Crescent Campus, G.S.T. Road,/
                        Vandalur, Chennai – 600 048,
                        Tamilnadu, India.</p></div></div>

            <div className='flex items-center lg:items-center gap-3 md:gap-3 hover:text-[#1C315E]'>
                <Icon icon="tabler:phone" width="24" height="24" className='w-5 h-5  lg:w-8 lg:h-8 text-[#1C315E]' />
                <div className='w-1/2'>
                <p>+91-44-22751280</p>
                <p>+91-44-22751282</p></div>
            </div>
            <div className='flex items-center lg:items-center gap-3 md:gap-3 hover:text-[#1C315E]'>
                <Icon icon="mi:email" width="24" height="24" className='lg:w-8 lg:h-8 w-5 h-5 text-[#1C315E]' />
                <div className='w-1/2'>
                <p>office.kbacollege@gmail.com</p>
                <p>bukhariarabic@gmail.com</p></div>
            </div>
            <div className='flex items-center lg:items-center gap-3 md:gap-3 hover:text-[#1C315E]'>
                <Icon icon="fa:globe" className='lg:w-8 lg:h-8 w-5 h-5 text-[#1C315E]'  /><a href="www.albukhari.in">www.albukhari.in</a></div>

        </div>
    )
}

export default Methods