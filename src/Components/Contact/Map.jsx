import React from 'react';

function Map() {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4659439757834!2d80.0800323!3d12.8777329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f613c70a0a5d%3A0x7ada6e9d17c675d4!2sKilakarai%20Bukhari%20Aalim%20Arabic%20College!5e0!3m2!1sen!2sin!4v1737119122149!5m2!1sen!2sin"
        width="200"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className='shadow-xl rounded-lg w-full lg:w-[90%]'
      ></iframe>
    </>
  );
}

export default Map;