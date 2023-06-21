import React, { useState } from 'react'
import { IoIosArrowUp } from "react-icons/io"

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document?.documentElement?.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  }
  const scrollToTop = () =>{ window?.scrollTo({ top: 0, behavior: 'smooth' }) }
  window?.addEventListener('scroll', toggleVisible);


  return (
    <a 
      href="#"
      onClick={scrollToTop}
      className={`fixed w-[40px] h-[40px] bottom-[130px] right-[54px] text-white rounded-[10px] text-center text-3xl shadow-md z-[100] ${!visible && 'hidden'} transition-all duration-300 ease-out`}
      style={{ background: "linear-gradient(10deg, #394867 0%, #9BA4B5 100%)" }}>
      <IoIosArrowUp className="mt-[10px] ml-[10px] text-[20px]" />
    </a>
  )
}