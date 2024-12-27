import React from 'react'
import { IoIosMail } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <>
        <div className='flex bg-black h-20'>
            <div className='bg-white w-24 p-5 justify-center items-center text-center flex'>
            <IoIosMail size="35"/>
            </div>
            <div className='bg-white w-full pt-3  text-black  '>
                <h1 className='text-2xl font-bold'>Email RAG Chatbot</h1>
                <p className='text-sm  text-gray-500 '>Ask me questions about your emails, and I’ll retrieve and answer based on the email dataset.</p>
            </div>
            <div className='bg-white w-24 p-5 justify-center items-center text-center flex'>
            <FaUserCircle size="35"/>
            </div>
        </div>
    </>
  )
}

export default Header
