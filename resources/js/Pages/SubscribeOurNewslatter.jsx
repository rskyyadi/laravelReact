import React, { useState, useEffect } from 'react'
import { Fade } from 'react-reveal';

export default function SubscribeOurNewslatter() {
  const [matches, setMatches] = useState(window.matchMedia("(min-width: 414px)").matches)
  
  useEffect(() => {
    window
    .matchMedia("(min-width: 414px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, [])
  return (
    <Fade bottom>
        <div className="container wow fadeIn ml-auto mr-auto p-[35px] mb-5 shadow-md rounded-[10px] bg-white" data-wow-delay="0.5s">
            <div className="flex items-center">
                <div>
                    <h2 className={`font-bold ${matches ? "text-[20px]" : "text-[32px]"}`}>
                        Subscribe Our Newsletter <br />
                        <div className={`font-normal ${matches && "text-[16px] mt-[-5px]"}`}>get reguler updates</div>
                    </h2>
                </div>
                <div className="flex ml-auto">
                        <input 
                            type="text" 
                            placeholder="Enter eamil" 
                            className={`border-[2px] border-gray-300 h-[65px] p-[0 30px] rounded-[5px] w-[500px] text-gray-800 
                                ${matches && "mt-[25px]"} hover:shadow-md transition-all duration-300 ease hover:border-[#304352]
                            `}
                        />
                        <button 
                            className={`${matches ? "relative" : "absolute"} top-0 right-0 rounded-tr-[5px] rounded-br-[5px] h-[65px] 
                                leading-[65px] bg-[200%] text-[500] text-center whitespace-nowrap align-middle select-none p-[0 25px] text-[16px] 
                                ${matches ? "rounded-[8px]" : "rounded-[0 8px 8px 0]"} text-white cursor-pointer z-[5]
                                ${matches && "w-[180px] ml-3"} mt-[25px] transition-all duration-400 ease-out bg-gradient-to-r from-[#394867] via-[#9BA4B5] to-[#394867]
                                hover:shadow-md hover:border-gray-300 border-[2px] border-[#304352]
                            `}>
                            Subscribe
                        </button>
                </div>
            </div>
        </div>
    </Fade>
  )
}