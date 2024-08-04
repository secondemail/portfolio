import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import About from './Pages/About'
import NotFoundPage from './Pages/NotFoundPage'
import { VscExpandAll } from "react-icons/vsc";
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import { FaHome } from 'react-icons/fa'
import Experince from './Pages/Experince'
function App() {
  const [show,setShow]=useState(false)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/experince' element={<Experince/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
        <div onClick={(e)=>setShow(!show)} className='testnav tw-fixed tw-right-40 tw-bottom-10 tw-w-[70px] tw-h-[70px] tw-rounded-full'>
          <div className='testnav1  tw-w-full tw-h-full tw-relative tw-rounded-full tw-bg-blue-400'>
            <div className='tw-w-full tw-top-0 tw-absolute tw-h-full tw-rounded-full tw-flex tw-cursor-pointer tw-justify-center tw-items-center tw-z-[1000] '>
              <VscExpandAll className='tw-text-4xl'/>
            </div>
            <div className={show === false ? 'tw-w-[100px]  tw-opacity-0 tw-h-[100px] tw-rounded-full tw-bg-red-500 tw-top-0 tw-absolute' : 'tw-w-[70px] tw-font-[600] tw-opacity-1 tw-h-[70px] tw-rounded-full tw-bg-red-500 tw-top-[-100px] tw-absolute'}>
              <Link to='/about' className="tw-w-full tw-h-full tw-rounded-full tw-flex tw-items-center tw-justify-center">About</Link>
            </div>
            <div className={show === false ? 'tw-w-[100px]  tw-opacity-0 tw-h-[100px] tw-rounded-full tw-bg-green-500  tw-top-0 tw-left-0  tw-absolute' : 'tw-w-[70px] tw-font-[600] tw-opacity-1 tw-h-[70px] tw-rounded-full tw-bg-green-500  tw-top-[-70px]  tw-left-[-80px] tw-absolute'}>
              <Link to='/projects' className="tw-w-full tw-h-full tw-rounded-full tw-flex tw-items-center tw-justify-center">Projects</Link>
            </div>
            <div className={show === false ? 'tw-w-[100px]  tw-opacity-0 tw-h-[100px] tw-rounded-full tw-bg-orange-500 tw-top-0 tw-right-0 tw-absolute' : 'tw-w-[70px] tw-font-[600] tw-opacity-1 tw-h-[70px] tw-rounded-full tw-bg-orange-500 tw-top-[-70px]  tw-right-[-80px] tw-absolute'}>
              <Link to='/skills' className="tw-w-full tw-h-full tw-rounded-full tw-flex tw-items-center tw-justify-center">Skills</Link>
            </div>
            <div className={show === false ? 'tw-w-[100px]  tw-opacity-0 tw-h-[100px] tw-rounded-full tw-bg-blue-500 tw-top-0 tw-right-0 tw-absolute' : 'tw-w-[40px] tw-font-[600] tw-opacity-1 tw-h-[40px] tw-rounded-full tw-bg-blue-500 tw-top-[27px]  tw-right-[-60px] tw-absolute'}>
              <Link to='/' className="tw-w-full tw-h-full tw-rounded-full tw-flex tw-items-center tw-justify-center"><FaHome/></Link>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
