import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const DirectContacts = () => {
  const contacts = [
    {
      title: "Management",
      name: "Moulavi Dr. P.S. Syed Masood Jamali",
      position: "Principal",
      phone: "+91-94442 22875",
      email: "syedmasoodjamali@crescent.education",
    },
    {
      title: "Academic & Admin Affairs",
      name: "Moulavi Dr. A. Abdul Hai Hasani Nadwi",
      position: "Vice Principal",
      phone: "+91-99520 36437",
      email: "hainadwi@crescent.education",
    },
    {
      title: "Hostel Affairs",
      name: "Moulavi Dr. M. Ahamedullah Al Bukhari",
      position: "Hostel Warden",
      phone: "+91-94441 43573",
      email: "ahamedullah@crescent.education",
    },
  ];

  return (
    
      <div className="bg-white rounded-lg shadow-2xl font-montserrat w-[100%]   pb-10">
        <div className="p-6">
        <h2 className="text-[#07294D] text-xl font-semibold pt-6">Direct Contacts:</h2>
        <div className="mt-3 w-10 border-2 border-[#1C315E]"></div></div>
        <div className="mt-6 mx-5 space-y-8">
          {contacts.map((contact, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-lg font-bold text-[#1D2025] ">{contact.title}:</h3>
              <p className="text-[#07294D] font-medium font-Roboto">{contact.name}</p>
              <p className="text-gray-600 font-Roboto">{contact.position}</p>
              <div className="flex flex-col gap-3  text-gray-700">
                <span className="flex items-center font-Roboto">
                <Icon icon="tabler:phone" width="24" height="24" className='lg:w-4 lg:h-4 mr-1' />
                  {contact.phone}
                </span>
                <span className="flex items-center">
                <Icon icon="tabler:mail" width="24" height="24" className='lg:w-4 lg:h-4 mr-1' />
                 
                  <a href={`mailto:${contact.email}`} className="hover:underline font-Roboto">
                    {contact.email}
                  </a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
 
  );
};

export default DirectContacts;
