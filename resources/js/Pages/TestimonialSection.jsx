import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa"
import { Fade } from 'react-reveal'

export default function TestimonialSection() {
  const [active, setActive] = useState(false)
  const [data, setData] = useState([
    {
        id: 1,
        icon: [<FaUserCircle className="h-[120px] w-[120px]" />],
        name: "Matheus Pato",
        position: "Atlet Football",
        description: "As a Project Manager at a small local company, I was looking for a universal solution for my company’s website. Arctic is just what I need! It looks stunning and works flawlessly."
    },
    {
        id: 2,
        icon: [<FaUserCircle className="h-[120px] w-[120px]" />],
        name: "Ma'aruf Amin",
        position: "Co-President",
        description: "Thanks to Arctic, I am now able to showcase all my works without doing any extra coding and design manipulations. It’s incredible, my website looks stunning. Thank you!"
    },
    {
        id: 3,
        icon: [<FaUserCircle className="h-[120px] w-[120px]" />],
        name: "Riski AP",
        position: "Manusia Tampan",
        description: "As a freelance landscape designer, it is important for me to have a great looking portfolio of all my works, and this template has what I need. I especially like."
    },
  ])
  const TitleSection = () => (
    <div>
      <h2 className="text-center w-full mt-[0.5rem] mb-[0.5rem] text=[rgb(31 41 55)] text-[3rem] leading-[1.25]">
        <b className="text-white">WHAT OUR CLIENTS SAY ?</b>
      </h2>
      <div className="mb-0" style={{ width: "100%" }}>
        <div className="bg-gradient-to-r from-[#000046] to-[#1cb5e0] h-[0.25rem] ml-auto mr-auto w-[16rem] opacity-[0.25rem] mt-0 mb-0 pt-0 pb-0 rounded-t-[0.25rem]"></div>
      </div>
    </div>
  )
  return (
    <Fade bottom>
        {/* <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="/docs/images/carousel/carousel-1.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
            </div>
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div> */}

        <div className="container px-[40px] bg-[#d8d5d5] rounded-[40px] mb-[100px] h-[500px] mb-[100px] bg-gradient-to-b from-[#394867] to-[#9BA4B5] ml-auto mr-auto">
            <div className="text-center pt-4 pb-3 mb-[70px]">
                <TitleSection />
            </div>
            <div className='flex justify-between'>
                {data.map(val => {
                    return (
                        <div onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} className='w-[30%] hover:text-white'>
                            <div className="p-3 w-full h-[400px] text-center bg-white hover:bg-[#304352] rounded-[30px] shadow-md transition-all duration-300 ease">
                                <div className={`relative ${active ? "top-[-40px]" : "top-[40px]"} inline-block mb-[40px] p-[10px] ransition-all duration-300 ease`}>
                                    {val?.icon}
                                </div>
                                <h4 className={`font-bold relative ${active ? "top-[-60px]" : "top-[10px]"} transition-all duration-600 ease-cubic-bezier[0.68,-0.55,0.265,1.55]`}>
                                    {val?.name}
                                </h4>
                                <small className={`text-[red] relative ${active ? "top-[-55px]" : "top-3"} transition-all duration-600 ease-cubic-bezier[0.68,-0.55,0.265,1.55] flex justify-center`}><b>
                                    {`( ${val?.position} )`}
                                </b></small>
                                <div className={`mt-5 relative ${active ? "top-[-50px]" : "top-0"} transition-all duration-600 ease-cubic-bezier[0.68,-0.55,0.265,1.55]`}>
                                    <small className={`w-[80%] ml-auto-mr-auto ${active ? "opacity-100" : "opacity-0"}`}><i>{`"${val?.description}"`}</i></small>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </Fade>
  )
}