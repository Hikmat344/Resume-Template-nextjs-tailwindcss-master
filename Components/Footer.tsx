import React from 'react'
import Linkedin from './shared/Linkedin'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
        <div className="mt-5  flex justify-around items-center bg-gray-500 rounded-t-md shadow-inner shadow-white md:flex-row sm:flex-col">
                        {/* <div>
                        <p className="items-center mx-10 text-bold  uppercase tracking-widest text-red-900 w-full sm:w-[100%]">
                            Let&apos;s Connect
                        </p>
                        </div> */}

                        <div className="flex mx-10 items-center my-5 w-full sm:w-[100%] ">
                        <div className='mx-1'>
                            { <Linkedin url="https://www.facebook.com">
                                
                                 <FaLinkedin />

                            </Linkedin> }
                            </div>
                            <div className='mx-1'>
                            <Linkedin url="https://www.linkedin.com">

                                <FaFacebook /> 

                            </Linkedin>
                            </div>
                            <div className='mx-1'>
                            <Linkedin url="https://www.github.com">

                                <FaGithub /> 
                                
                            </Linkedin>
                            </div>
                            <div className='mx-1'>
                            <Linkedin url="https://www.twitter.com">

                                <FaTwitter /> 
                                
                            </Linkedin>
                            </div>
                            <div className='mx-1'>
                            <Linkedin url="https://www.youtube.com">

                                <FaYoutube /> 
                                
                            </Linkedin>
                            </div>
                            
                        </div>
                        <div>
            <p className='flex justify-text justify-between text-white w-[100%] items-center'>Created by Hikmat Ullah</p>
        </div>
        
        
    </div>     
     
    </div>
  )
}

export default Footer