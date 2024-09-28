import React from 'react'
import { BiBell, BiCreditCard, BiHome, BiNotification } from 'react-icons/bi'
import { BsArrowUp, BsMailbox } from 'react-icons/bs'
import { FaChartBar } from 'react-icons/fa'
import { FcDocument } from 'react-icons/fc'
import { FiExternalLink } from 'react-icons/fi'

const Sidebar = () => {
  return (
    <div className='bg-slate-800 flex-none w-14 sm:w-20 h-screen'>
        <div className='h-20 items-center flex'>
            <BiHome size={40} className='text-gray-300 left-3 sm:left-6 fixed' />
        </div>
        <div className='fixed left-3 sm:left-6 top-[100px]'>
            <FaChartBar size={40} className='bg-gray-600  p-2 rounded-lg mb-4 text-gray-300 ' />
            <FcDocument size={40} className='bg-gray-600  p-2 rounded-lg mb-4 text-gray-300 ' />
            <BsMailbox size={40} className='bg-gray-600  p-2 rounded-lg mb-4 text-gray-300 ' />
            <BiCreditCard size={40} className='bg-gray-600 p-2  rounded-lg mb-4 text-gray-300 ' />
            <BiBell size={40} className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 ' />
        </div>
        <div className='fixed bottom-4 left-3 sm:left-6'>
          <a href="#top">
            <BsArrowUp size={40} className='bg-gray-600 rounded-lg p-2 mb-4  text-gray-300' />
          </a>
            <FiExternalLink size={40} className='bg-gray-600 rounded-lg p-2 mb-4  text-gray-300' />
        </div>
    </div>
  )
}

export default Sidebar