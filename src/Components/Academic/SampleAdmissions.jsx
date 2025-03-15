import React from 'react'
import { Link } from 'react-router-dom';

import ApplyNowButton from '../ui/ApplyButton';
function SampleAdmissions() {
   
    return (
        <>
         <div className='bg-[#EDF0F2] lg:px-20 my-14'>
                <div className='pt-0  px-6 flex flex-col gap-10'>
                    <h2 className='font-bold text-[26px] lg:text-[48px] font-montserrat md:text-[26px] mb-5'>Admission Enquiries</h2>
                    <h2 className='text-[#07294D] text-[18px] font-bold font-montserrat'> Welcome to Arabic University! We offer a range of undergraduate and postgraduate programs designed to provide quality education and research opportunities. Admission is open to eligible students, with scholarships available for qualified candidates. For application procedures, deadlines, and required documents, please contact our admissions office or visit our official website. We look forward to welcoming you!</h2>
                   
                    <Link  to="/admission"><ApplyNowButton name={"Visit here"} textColor="blue-500" co/></Link>
                </div>
                 
            </div>
        </>
    )
}

export default SampleAdmissions;