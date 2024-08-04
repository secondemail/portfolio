import React from 'react'
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div>
      <div className='lg:tw-flex tw-justify-between tw-p-10'>
        <div className='tw-flex tw-mb-10 lg:tw-mb-0 tw-flex-col tw-justify-center'>
          <div className='tw-flex tw-gap-[100px]'>
            <div className='tw-text-[35px] tw-border-2 tw-w-[100px] tw-h-[100px] tw-rounded-full tw-flex tw-justify-center tw-items-center'>Html</div>
            <div className='tw-text-[35px] tw-border-2 tw-w-[100px] tw-h-[100px] tw-rounded-full tw-flex tw-justify-center tw-items-center'>Css</div>
          </div>
          <div className='tw-text-[100px] tw-animate-pulse tw-flex tw-justify-center'>
            <FaReact/>
          </div>
          <div className='tw-flex tw-gap-[100px]'>
            <div className='tw-text-[35px] tw-border-2 tw-w-[100px] tw-h-[100px] tw-rounded-full tw-flex tw-justify-center tw-items-center'>Js</div>
            <div className='tw-text-[35px] tw-border-2 tw-w-[100px] tw-h-[100px] tw-rounded-full tw-flex tw-justify-center tw-items-center'>Axios</div>
          </div>
        </div>
        <div className='tw-mb-10 lg:tw-mb-0'>
          <div className='tw-text-[27px] tw-border-2 tw-p-2 tw-text-center tw-mb-4'>React Js - Next Js</div>
          <div className='tw-text-[27px] tw-border-2 tw-p-2 tw-text-center tw-mb-4'>React Router</div>
          <div className='tw-text-[27px] tw-border-2 tw-p-2 tw-text-center tw-mb-4'>Redux - Redux Toolkit</div>
          <div className='tw-text-[27px] tw-border-2 tw-p-2 tw-text-center tw-mb-4'>React Hooks - Custom Hooks</div>
          <div className='tw-text-[27px] tw-border-2 tw-p-2 tw-text-center tw-mb-4'>Components Life Cycle</div>
          <div className='tw-text-[27px] tw-border-2 tw-p-2 tw-text-center tw-mb-4'>React Bootstrap</div>
          <div className='tw-text-[27px] tw-border-2 tw-p-2 tw-text-center tw-mb-4'>React Icons</div>
          <div className='tw-text-[27px] tw-border-2 tw-p-2 tw-text-center'>Formik - Yup Form validation</div>
        </div>
        <div className='tw-flex tw-flex-col tw-justify-center'>
          <div className='tw-flex tw-gap-[50px] lg:tw-gap-[120px]'>
            <div className='tw-text-[27px] tw-border-2 tw-p-2 tw-text-center'>Bootstrap</div>
            <div className='tw-text-[27px] tw-border-2 tw-p-2 tw-text-center'>Tailwind</div>
          </div>
          <div className='tw-text-[100px] tw-animate-pulse tw-flex tw-justify-center tw-py-4'>
            <RiNextjsFill/>
          </div>
          <div className='tw-flex tw-gap-[100px]'>
            <div className='tw-text-[27px] tw-border-2 tw-p-2 tw-text-center'>Material ui</div>
            <div className='tw-text-[27px] tw-border-2 tw-p-2 tw-text-center'>React Icons</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills