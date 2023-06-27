
import Image from 'next/image';
import line from "@/public/Images/minus.png";
import react from "react";
import developer from "@/public/Images/developer2.png"

export default function About(){
return (
    <div className="flex items-center mt-10">
        <div className="flex items-center max-w-full mx-auto leading-5" id="about">
            <div className="text-white-500 px-10 mt-10">
               
                <div className="flex justify-between">
                    <div className="flex flex-col flex-initial">
                    <h1 className="p-24 text-center text-5xl text-red-900 font-bold mb-10">
                    About Me
                    {/* <Image className="mt-0 items-center rounded-none w-15 h-15 shadow-lg" src={line} alt=" line" /> */}

                </h1>
                        <p className="text-2xl max-w-2xl flex text-slate-300 text-justify pt-15">
                             My name is Hikmat Ullah. I am a dedicated and reliable Computer System Engineering professional and having 1 year of working experience 
                            as a web developer based in Peshawar , PK. I have worked on different freelanceing platforms as well as with some international companies.
                            During the day I utilize the time to build my own products. Right now I am also trying a hand at web 3.0  and Metaverse. I love to learn and explore new arenas.
                    

                        </p>
                    </div>
                    <div className='text-red-900 mx-8  '>
            
                            <Image className="rounded-lg  shadow-lg mt-20" width={420} height={420} src={developer} alt='web development icons' />
                            
                    </div>
                    </div>
            </div>
        </div>
    </div>
)

}