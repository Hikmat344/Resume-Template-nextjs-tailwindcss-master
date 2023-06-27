import Image from "next/image";
import khan from "@/public/Images/portfolio/khan.jpg"
import jet from "@/public/Images/portfolio/jet.jpg"
import five from "@/public/Images/portfolio/five.jpg"


export default function Portfolio(){
    return(
        
            <div className="flex items-center max-w-8xl mx-auto leading-5 mt-10" id="portfolio">
                <div className="text-gray-500 px-10 mt-30 mx-auto">
                   
                    <h1 className="p-24 text-center text-5xl text-red-900 font-bold mb-10">
                        Portfolio
                    </h1>
                
                    {/* cards */}
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-24 mx-auto w-full ">
                        {/* Card1 */}
                        <div className="  h-60 hover:scale-110 duration-150">
                            <div>
                                <Image  className="rounded-t-lg w-80 h-60" src={khan} alt="website" />
                        
                            </div>
                            <div className="flex justify-between items-center px-5 text-white shadow-lg shadow-red-900">
                                <button className="p-5 hover:scale-50 duration-100">
                                    <a href="https://khanshahzada.com/" >Check Out</a>
                                </button>
                                <button className="p-5 hover:scale-50 duration-100">
                                    <a href="https://khanshahzada.com/" >Code</a>
                                </button>
                            </div>
                    
                        </div>
                        {/* Card2 */}
                        <div className="  h-60 hover:scale-110 duration-150">
                            <div>
                                <Image  className="rounded-t-lg w-80 h-60" src={jet} alt="website" />
                        
                            </div>
                            <div className="flex justify-between px-5 text-white shadow-lg shadow-red-900">
                                <button className="p-5 hover:scale-50 duration-100">
                                    <a href="https://jettaxis.co.uk/" >Check Out</a>
                                </button>
                                <button className="p-5 hover:scale-50 duration-100">
                                    <a href="https://jettaxis.co.uk/" >Code</a>
                                </button>
                            </div>
                    
                        </div>
                        {/* Card3 */}
                        <div className="  h-60 hover:scale-110 duration-150">
                            <div>
                                <Image  className="rounded-t-lg w-80 h-60" src={five} alt="website" />
                        
                            </div>
                            <div className="flex justify-between px-5 text-white  shadow-lg shadow-red-900">
                                <button className="p-5 hover:scale-50 duration-100">
                                    <a href="https://fivestar-cars.co.uk/mini-bus-hire/" >Check Out</a>
                                </button>
                                <button className="p-5 hover:scale-50 duration-100">
                                    <a href="https://fivestar-cars.co.uk/mini-bus-hire/" >Code</a>
                                </button>
                            </div>
                    
                        </div>
                    </div>
                </div>
            </div>

    )
}