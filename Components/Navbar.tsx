"use client";
import {FaGithub, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import {AiOutlineClose, AiOutlineMenu , AiFillMediumSquare} from "react-icons/ai";
import Linkedin from "./shared/Linkedin";
import logo from "@/public/Images/logo.png"



const Navbar = () => {
    const [nav , setNav] = useState(false);
    const handleNav = () =>{
        setNav(!nav);
    };

    return (
      <div className="sticky top-0 w-full h-20 shadow-md shadow-white z[100] bg-red-900 text-white">
        <div className="flex sticky justify-between items-center w-full h-full px-4 2xl:px-16 py-10">
            <Link href={"#home"} >
                <Image src = {logo} 
                alt=" " width = {100} height={100} className="w-16 h-16 rounded-full bg-[#54ca95]"/>
            </Link>
            <div>
                <ul className="hidden md:flex items-center">
                    <a className="cursor-pointer" href={"#about"}>
                    <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray-400">
                        About
                    </li>
                    </a>
                    <a className="cursor-pointer" href={"#skills"}>
                    <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray-400">
                        Skills
                    </li>
                    </a>
                    <a className="cursor-pointer" href={"#portfolio"}>
                    <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray-400">
                        Portfolio
                    </li>
                    </a>
                    <a className="cursor-pointer" href={"#contact"}>
                    <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray-400">
                        Contact
                    </li>
                    </a>
                </ul>
                {/*Mobile Navbar*/}
                <div onClick={handleNav} className="md:hidden">
                    <AiOutlineMenu size="25"/>
                </div>
            </div>
        </div>
        {/* Mobile Menu*/}
        <div className= {`${nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : " "}`}>
        <div className={`${nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500 bg-white" : "fixed left-[-100%] top-0 p-15 ease-in duration-500 "} `}>
                <div className="flex w-full items-center justify-between">
                <Link href={"/"} >
                    <Image src = {logo} 
                    alt=" " width = {100} height={100} className="w-16 h-16 rounded-full bg-[#54ca95]"/>
                </Link>
                <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 duration-150">
                    <AiOutlineClose/>
                </div>
                </div>
                <div className="border-b border-gray-300 my-6">
                    <p className="w-[90%] md:w-[95%] py-4">Hikmat Ullah <br/> FrontEnd web developer | Web 3.0 & Metaverse Evangelist</p>
                </div>
                <div className="py-4 flex-col ">
                    <ul className="uppercase text-sm">
                        <a  className="cursor-pointer hover:scale-110 duration-150" onClick={handleNav} href={"#about"}>
                            <li className="py-4 " id='About'>About</li>
                        </a>
                        <a className="cursor-pointer hover:scale-110 duration-150" onClick={handleNav} href={"#skills"}>
                            <li className="py-4 " id='Skills'>Skills</li>
                        </a>
                        <a className="cursor-pointer hover:scale-10 duration-150" onClick={handleNav} href={"#portfolio"}>
                            <li className="py-4 " id='Portfolio'>Portfolio</li>
                        </a>
                        <a className="cursor-pointer hover:scale-10 duration-150" onClick={handleNav} href={"#contact"}>
                            <li className="py-4 " id='Contact'>Contact</li>
                        </a>
                        
                    </ul>
                    <div className="py-40">
                        <p className="uppercase tracking-widest text-[#54ca95] w-full sm:w-[80%]">
                            Let&apos;s Connect
                        </p>
                        <div className="flex justify-between items-center my-4 w-full sm:w-[80%] ">
                            { <Linkedin url="https://www.facebook.com/in/hikmat-ullah-b284081b9/">
                                
                                 <FaLinkedin />

                            </Linkedin> }
                            <Linkedin url="https://www.linkedin.com/in/hikmat-ullah-b284081b9/">

                                <FaFacebook /> 

                            </Linkedin>
                            <Linkedin url="https://www.github.com/Hikmee/">

                                <FaGithub /> 
                                
                            </Linkedin>
                            <Linkedin url="https://www.twitter.com">

                                <FaTwitter /> 
                                
                            </Linkedin>
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
        )
  }
  export default Navbar


