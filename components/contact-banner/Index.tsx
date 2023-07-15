import Link from 'next/link';
import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

function ContactBanner() {
  return (
    <section className='bg-gradient-to-r from-blue-700 via-blue-400 to-green-500 py-12'>
      <div className="container mx-auto text-white grid items-center md:grid-cols-3">
        <h2 className='title px-5 from-slate-900 font-extralight text-2xl md:text-4xl md:col-span-2'>
            Faites-nous part de votre projet,<br /> nous sommes là pour vous guider.
        </h2>
        <div className='text-center items-center flex pt-10 md:pt-0'>
          <Link href={`/nous-contacter`} className="flex mx-auto justify-items-center items-center bg-blue-600 shadow-sm rounded-lg px-4 py-1">
              <FaArrowRight color='text-slate-300' className='pr-3 text-5xl cursor-pointer font-extralight'/>
              <span className='font-extralight text-2xl '> Contactez nous</span>  
            
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ContactBanner;