import React from "react"
// import { Button, Container, Row, Col } from "reactstrap"
import { HiOutlineShoppingCart } from "react-icons/hi"
import { IoLogoWhatsapp } from "react-icons/io"
import styled, { keyframes } from 'styled-components'
import LogoPutih from '../../../public/LogoPutih.png'
import { Fade } from "react-reveal"

export default function Jombotron(props) {
    const BulletDesignHeader = () => (
        <div className="h-16 w-16 rounded-full bg-blue-500 z-[100]">
          <div className="animate-bounce">
            <span className="w-[150px] h-[150px] rounded-full ml-[100px] mt-[50px]"></span>
            <span className="w-[150px] h-[150px] rounded-full ml-[100px] mt-[100px]"></span>
            <span className="w-[100px] h-[100px] rounded-full ml-[100px] mt-[150px]"></span>
            <span className="w-[150px] h-[150px] rounded-full ml-[100px] mt-[200px]"></span>
            <span className="w-[150px] h-[150px] rounded-full ml-[100px] mt-[250px]"></span>
            <span className="w-[50px] h-[50px] rounded-full ml-[100px] mt-[450px]"></span>
          </div>
        </div>
    )
    const HeaderDesign = () => (
        <div className="relative">
            <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
                    <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                    <path
                        d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                        opacity="0.100000001"></path>
                    <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
                    </g>
                    <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
                    <path
                        d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
                    ></path>
                    </g>
                </g>
            </svg>
        </div>
    )
    const IntroSection = ({ alt, src, labelOne, labelTwo, description, variant, btnType, btnIcon, btnLabel }) => (
        <>
            <img alt={alt} className="mx-auto max-w-full h-auto w-[200px] pt-[120px]" src={src} />
            <div className="lead text-white font-helvetica text-[50px] mt-[-25px]">
                <div><b>{labelOne}</b></div>
                <div className="mt-[-25px]"><b>{labelTwo}</b></div>
            </div>
            <small className="text-white">{description}</small>
            <br />
            <button 
                className="inline-flex items-center mt-3 px-4 py-2 bg-amber-600 dark:bg-orange-600 border rounded-md font-semibold text-xs text-white dark:text-white uppercase tracking-widest hover:bg-amber-700 dark:hover:bg-blue-700 focus:bg-amber-700 dark:focus:bg-white} active:bg-amber-900 dark:active:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-amber-800 transition ease-in-out duration-150"
                color={variant} 
                type={btnType}>
                {btnIcon}
                <span className="btn-inner--text">{btnLabel}</span>
            </button>
        </>
    )
    const PopUpWhatsapp = () => (
        <a href="https://wa.me/6281933929274?text=Hi%20Qiscus" 
            target="blank"
            className="fixed w-[60px] h-[60px] bottom-[40px] right-[40px] bg-green-500 text-white rounded-full text-center text-3xl shadow-md z-[100] animate-bounce duration-500">
            <IoLogoWhatsapp className="mt-[15px] ml-[15px] text-[30px]" />
        </a>
    )
    const headerStyle = {
        fontFamily: 'Source Sans Pro, sans-serif',
        background: "linear-gradient(90deg, #394867 0%, #9BA4B5 100%)",
    }
    return (
        <>
            <div className="relative leading-normal tracking-normal text-white gradient" style={headerStyle}>
            <section className="section section-hero section-shaped">
                <div className="col px-0">
                    <div className="row items-center justify-center">
                        <div className="col text-center">
                            <BulletDesignHeader />
                            <Fade bottom>
                                <IntroSection 
                                    alt={"..."}
                                    src={LogoPutih}
                                    labelOne={"Find Your Style,"}
                                    labelTwo={"Refresh Your Look"}
                                    description={<>
                                        We believe in a global fashion industry that conserves and restores <br />
                                        the environment and values people over growth and profit
                                    </>}
                                    variant={"warning"}
                                    btnType={"button"}
                                    btnIcon={<HiOutlineShoppingCart />}
                                    btnLabel={"Checkout Now !"}
                                />
                            </Fade>
                            <PopUpWhatsapp />
                        </div>
                    </div>
                </div>
            </section>
            <HeaderDesign />
            </div>
        </>
    )
}