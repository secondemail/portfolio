import React from 'react'
import avatar from '../assets/Picsart_24-07-05_13-38-13-790.jpg'
import bac from '../assets/images.jpeg'
import cv from '../assets/kareem_elmohammady.pdf'
import { Link } from 'react-router-dom'


const HomePage = () => {
  return (
    <div className='lg:tw-flex tw-justify-center tw-gap-[100px] lg:tw-pt-[100px]'>
      <img className='tw-absolute tw-filter  tw-grayscale tw-w-full tw-h-full tw-top-0 tw-z-[-100] tw-opacity-20' src={bac} alt=''/>
      <div>
        <img className='tw-w-[500px] tw-h-auto tw-rounded-full' src={avatar} alt=""/>
      </div>
      <div>
        <p className='tw-font-bold lg:tw-text-[50px] tw-pl-7 lg:tw-pl-0'>Hi,There</p>
        <p className='tw-font-bold lg:tw-text-[50px] tw-pl-7 lg:tw-pl-20'>Welcome To My World</p>
        <p className='tw-font-bold lg:tw-text-[30px] tw-pl-7 lg:tw-pl-40'>Feel Free To Take A Tour In My Portfolio</p>
        <div className='tw-my-10 tw-flex tw-flex-col tw-justify-center tw-items-center'>
          <p className='tw-font-bold tw-text-[40px]'>Download My Cv</p>
          <a href={cv} download className='btnA tw-mt-4 tw-overflow-hidden hover:tw-bg-white hover:tw-text-black tw-cursor-pointer tw-flex tw-p-2 tw-px-7 tw-relative tw-items-center tw-gap-4 tw-border-2 tw-border-white'>
            <div className='btnA1 tw-w-[10px] tw-absolute tw-left-2 tw-h-[10px] tw-rounded-full tw-bg-white'></div>
            <div className='tw-text-[20px]'>Download</div>
            <div className='btnA2 tw-w-[10px] tw-absolute tw-right-2 tw-h-[10px] tw-rounded-full tw-bg-white'></div>
          </a>
        </div>
        <div className='lg:tw-flex tw-justify-between tw-mt-[40px]'>
          <Link to='/about' className='btnA tw-m-7 tw-overflow-hidden hover:tw-bg-white hover:tw-text-black tw-cursor-pointer tw-flex tw-p-2 tw-px-7 tw-relative tw-items-center tw-justify-center lg:tw-justify-start tw-gap-4 tw-border-2 tw-border-white'>
            <div className='btnA1  tw-w-[10px] tw-absolute tw-left-2 tw-h-[10px] tw-rounded-full tw-bg-white'></div>
            <div className='tw-text-[20px]'>About me</div>
            <div className='btnA2 tw-w-[10px] tw-absolute tw-right-2 tw-h-[10px] tw-rounded-full tw-bg-white'></div>
          </Link>
          <Link to='/projects' className='btnA tw-m-7 tw-overflow-hidden hover:tw-bg-white hover:tw-text-black tw-cursor-pointer tw-flex tw-p-2 tw-px-7 tw-relative tw-items-center tw-justify-center lg:tw-justify-start  tw-gap-4 tw-border-2 tw-border-white'>
            <div className='btnA1 tw-w-[10px] tw-absolute tw-left-2 tw-h-[10px] tw-rounded-full tw-bg-white'></div>
            <div className='tw-text-[20px]'>Projects</div>
            <div className='btnA2 tw-w-[10px] tw-absolute tw-right-2 tw-h-[10px] tw-rounded-full tw-bg-white'></div>
          </Link>
          <Link to='/skills' className='btnA tw-m-7 tw-overflow-hidden hover:tw-bg-white hover:tw-text-black tw-cursor-pointer tw-flex tw-p-2 tw-px-7 tw-relative tw-items-center tw-justify-center lg:tw-justify-start tw-gap-4 tw-border-2 tw-border-white'>
            <div className='btnA1 tw-w-[10px] tw-absolute tw-left-2 tw-h-[10px] tw-rounded-full tw-bg-white'></div>
            <div className='tw-text-[20px]'>Skills</div>
            <div className='btnA2 tw-w-[10px] tw-absolute tw-right-2 tw-h-[10px] tw-rounded-full tw-bg-white'></div>
          </Link>
          <Link to='/experince' className='btnA tw-m-7 tw-overflow-hidden hover:tw-bg-white hover:tw-text-black tw-cursor-pointer tw-flex tw-p-2 tw-px-7 tw-relative tw-items-center tw-justify-center lg:tw-justify-start tw-gap-4 tw-border-2 tw-border-white'>
            <div className='btnA1 tw-w-[10px] tw-absolute tw-left-2 tw-h-[10px] tw-rounded-full tw-bg-white'></div>
            <div className='tw-text-[20px]'>Experince</div>
            <div className='btnA2 tw-w-[10px] tw-absolute tw-right-2 tw-h-[10px] tw-rounded-full tw-bg-white'></div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage