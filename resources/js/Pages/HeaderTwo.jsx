import React from 'react'

export default function HeaderTwo() {
  return (
    <div className="absolute top-0 left-0 w-full z-[99] transition-all duration-300 ease-out delay-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="p-[25px 0] rounded-[5px] relative transition-all duration-300 ease-out delay-0 navbar-expand-lg">
                <a className="p-0" href="index.html">
                  <img src="assets/images/logo/logo.svg" alt="Logo" />
                </a>
                <button
                  className="focus:no-underline outline-none shadow-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="w-[30px] h-[2px] bg-white block m-[5px] relative transition-all duration-300 ease-out delay-0 rotate-45 translate-y-7"> </span>
                  <span className="w-[30px] h-[2px] bg-white block m-[5px] relative transition-all duration-300 ease-out delay-0"> </span>
                  <span className="w-[30px] h-[2px] bg-white block m-[5px] relative transition-all duration-300 ease-out delay-0"> </span>
                </button>

                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <ul id="nav" className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a className="page-scroll active" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#features">Features</a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#facts">Why</a>
                    </li>
                    <li className="nav-item">
                      <a href="javascript:void(0)">Team</a>
                    </li>
                    <li className="nav-item">
                      <a href="javascript:void(0)">Blog</a>
                    </li>
                  </ul>
                </div>

                <div className="navbar-btn d-none d-sm-inline-block">
                  <a
                    className="main-btn"
                    data-scroll-nav="0"
                    href="https://uideck.com/templates/basic/"
                    rel="nofollow"
                  >
                    Download Now
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
  )
}