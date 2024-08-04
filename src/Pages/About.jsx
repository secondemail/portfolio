import React from 'react'
import bac from '../assets/images.jpeg'
import { FaReact } from "react-icons/fa";
import { LuSchool } from "react-icons/lu";
import { RiNextjsLine } from "react-icons/ri";
import { LuMail } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { FaFacebook,FaTelegram,FaInstagram,FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';




const About = () => {
  return (
    <div>
      <img className='tw-absolute tw-filter  tw-grayscale tw-w-full tw-h-full tw-top-0 tw-z-[-100] tw-opacity-20' src={bac} alt=''/>
      <div className='tw-pt-10 lg:tw-p-10 tw-flex tw-flex-col tw-justify-center tw-items-center'>
        <p className='tw-text-[40px]'>Hi,I'm</p>
        <p className='tw-text-[40px] tw-pl-10'>Kareem Nabil Elmohammady</p>
        <p className='tw-text-[30px] lg:tw-text-[40px] tw-pl-20'>Frontend Developer</p>
        <div className='tw-mt-10 lg:tw-ml-10'>
          <div className='tw-flex tw-mb-5 lg:tw-mb-0 tw-items-center tw-gap-5 tw-text-2xl'>
            <span><LuSchool/></span>
            <span> Bachelory of Computer science grade (good)</span>
          </div>
          <div className='tw-flex tw-mb-5 lg:tw-mb-0 tw-items-center tw-gap-5 tw-text-2xl'>
            <span><FaReact/></span>
            <span> 2 Years Experience In React</span>
          </div>
          <div className='tw-flex tw-items-center tw-gap-5 tw-text-2xl'>
            <span><RiNextjsLine/></span>
            <span> 6 Months Experience In Next</span>
          </div>
        </div>
      </div>
      <div className='tw-pl-4 lg:tw-px-40  tw-mt-4 lg:tw-flex tw-justify-between'>
        <div>
          <p className='tw-text-[40px] tw-pl-10'>Contact Me</p>
          <div className='tw-flex tw-items-center tw-gap-3 tw-text-xl lg:tw-text-2xl'>
            <span><LuMail/></span>
            <a href='mailto:kareem.elmo7ammady@gmail.com'>kareem.elmo7ammady@gmail.com</a>
          </div>
          <div className='tw-flex tw-mt-2 tw-items-center tw-gap-5 tw-text-2xl'>
            <span><FiPhone/></span>
            <span>+201009891587</span>
          </div>
        </div>
        <div className='tw-mt-10 lg:tw-mt-0'>
          <p className='tw-text-[40px] tw-pl-10'>Social Media</p>
          <div className='tw-flex tw-pl-7 tw-pt-4 tw-items-center tw-gap-10 tw-text-4xl'>
            <a target='_blank' className='hover:tw-text-green-500 test tw-relative' href='https://wa.me/+201009891587'>
              <div className='tw-w-full test1 tw-absolute tw-top-[-8px] tw-h-[2px] tw-bg-green-500'></div>
              <FaWhatsapp/>
            </a>
            <a target='_blank' className='hover:tw-text-sky-500 test tw-relative' href='https://t.me/kareem_elmohammady'>
              <div className='tw-w-full test1 tw-absolute tw-top-[-8px] tw-h-[2px] tw-bg-sky-500'></div>
              <FaTelegram/>
            </a>
            <a target='_blank' className='hover:tw-text-blue-700 test tw-relative' href='https://facebook/Kareem.Elmo7ammady'>
              <div className='tw-w-full test1 tw-absolute tw-top-[-8px] tw-h-[2px] tw-bg-blue-700'></div>
              <FaFacebook/>
            </a>
            <a target='_blank' className='hover:tw-text-orange-500 test tw-relative' href='https://instagram/kareem.elmohammady'>
              <div className='tw-w-full test1 tw-absolute tw-top-[-8px] tw-h-[2px] tw-bg-orange-500'></div>
              <FaInstagram/>
            </a>
          </div>
        </div>
      </div>
      <div className='tw-flex tw-justify-center tw-mt-10 tw-mb-[200px] lg:tw-mb-0'>
        <Link to='/' className='btnA tw-overflow-hidden hover:tw-bg-white hover:tw-text-black tw-cursor-pointer tw-flex tw-p-2 tw-px-7 tw-relative tw-items-center tw-gap-4 tw-border-2 tw-border-white'>
          <div className='btnA1 tw-w-[10px] tw-absolute tw-left-2 tw-h-[10px] tw-rounded-full tw-bg-white'></div>
          <div className='tw-text-[20px]'>Back Home</div>
          <div className='btnA2 tw-w-[10px] tw-absolute tw-right-2 tw-h-[10px] tw-rounded-full tw-bg-white'></div>
        </Link>
      </div>

    </div>
  )
}

export default About