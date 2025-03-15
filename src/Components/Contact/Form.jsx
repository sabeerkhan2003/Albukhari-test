import React from 'react'

function Form() {
  return (
    <>
    {/* <div className='border-2 w-1/2 h-[400px]'> */}
          
      <div className="md:w-[100%] lg:w-[100%]  p-8 bg-white rounded-lg shadow-xl">
        <h2 className="text-[#1C315E] text-sm font-semibold tracking-wide font-montserrat">
          Contact Us
        </h2>
        <div className="mt-1 w-10 border-2 border-[#1C315E] lg:text-[18px]"></div>
        <h1 className="text-3xl font-bold text-gray-900 mt-4 lg:text-[48px] font-montserrat pt-2 pb-5">Keep in touch</h1>
        <form className="mt-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="name" className="sr-only">
                Your name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-4 w-fit bg-[#1C315E] px-8 py-2 text-white font-semibold rounded-md font-montserrat hover:bg-yellow-500 focus:outline-none "
          >
            Send
          </button>
        </form>
      </div>
          {/* </div> */}
    </>
  )
}

export default Form