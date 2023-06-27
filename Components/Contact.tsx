import React from 'react';
import {AiOutlineSend , AiFillMediumSquare} from "react-icons/ai";
import { MdOutlineAlternateEmail} from "react-icons/md";
import {GrLocation} from "react-icons/gr";
import {BsWhatsapp} from "react-icons/bs";
import Linkedin from './shared/Linkedin';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
        <div className="flex items-center max-w-8xl mx-auto leading-5 mt-10" id="contact">
        <div className="text-gray-500 px-10 mt-30 mx-auto">
       
             <h1 className="p-24 text-center text-5xl mb-1 text-red-900 font-bold">
                Contact me
            </h1>
            <div className='flex justify-between'>
                <div className='flex justify-start '>
                <form 
             action="https://formspree.io/f/xnqyoqbk"
             method="POST"
             
             >
                <div>
                    <input name="name" required className='mx-auto p-2 w-80 bg-transparent border-4 border-red-900 rounded-md focus:outline-none text-white' placeholder='Enter Your name' type='text' />
                </div>
                <div className='my-1'>
                    <input name='email' required className=' mx-auto p-2 w-80 bg-transparent border-4 border-red-900 rounded-md focus:outline-none text-white' placeholder='Enter Your Email' type='email' />
                </div>
                <div className='my-1'>
                    <textarea name='message' rows={9} required className='mx-auto p-2 w-80 bg-transparent border-4 border-red-900 rounded-md focus:outline-none text-white' placeholder='Enter Your message...' />
                </div>

                <button className=" mt-3 items-center group rounded-lg flex justify-center bg-red-900 py-2 px-2 text-black cursor-pointer hover:scale-105 ease-in hover:bg-gray-300 font-bold" type='submit' >Send
                <AiOutlineSend size={25}  className ='group-hover:scale-100 duration-500 mx-3 '/>
                </button>
            </form>
            </div>
            
            <div className='flex flex-col px-10 mx-10'>
             <div className='flex flex-row px-20 mx-0 items-center text-black '>
                <MdOutlineAlternateEmail className="text-lg w-11 h-11 bg-red-900 rounded-full cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-gray-300 shadow-lg shadow-red-900" />  <div className='mx-10 text-white'>hikmatcse1919@gmail.com</div>
             </div>
             <div className='flex flex-row px-20 mx-0 mt-8 items-center text-lg text-black'>
             <GrLocation  className="text-lg w-11 h-11 bg-red-900 rounded-full cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-gray-300 shadow-lg shadow-red-900" />  <div className='mx-10 text-white'>Peshawar Pakistan</div>
             </div>
             <div className='flex flex-row px-20 mx-0 mt-8 items-center text-lg text-black'>
             <BsWhatsapp  className="text-lg w-11 h-11 bg-red-900 rounded-full cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-gray-300 shadow-lg shadow-red-900" />  <div className='mx-10 text-white'>+923446474475</div>
             </div>

             <div className="pt-10 flex items-center mt-5 w-full sm:w-[100%] flex-row justify-around gap-4 px-20 mx-0  text-red-900">
                        <div className='mx-1'>
                            { <Linkedin url="https://www.linkedin.com/in/hikmat-ullah-b284081b9/">
                                
                                 <FaLinkedin />

                            </Linkedin> }
                            </div>
                            <div className='mx-1'>
                            <Linkedin url="https://www.facebook.com/hikmat.ullah.1694059">

                                <FaFacebook /> 

                            </Linkedin>
                            </div>
                            <div className='mx-1'>
                            <Linkedin url="https://www.github.com/Hikmee/">

                                <FaGithub /> 
                                
                            </Linkedin>
                            </div>
                            <div className='mx-1'>
                            <Linkedin url="https://www.twitter.com">

                                <FaTwitter /> 
                                
                            </Linkedin>
                            </div>
                            <div className='mx-1'>
                            <Linkedin url="https://www.youtube.com/@hikmatullah9353">

                                <FaYoutube /> 
                                
                            </Linkedin>
                            <Linkedin url="https://medium.com/@khanhikmee344">

                                <AiFillMediumSquare /> 
                                
                            </Linkedin>
                            </div>
                            
                        </div>

            </div>

            </div>
        </div>
        </div>
        <div>
            <p className='flex px-10 justify-text justify-end text-white w-[100%] items-center'>Created by Hikmat Ullah</p>
        </div>
    </div>
  )
}

export default Contact
