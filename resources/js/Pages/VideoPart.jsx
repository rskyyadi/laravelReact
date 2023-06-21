import React from 'react'

export default function VideoPart() {
  return (
    <section id="facts" className="video-counter pt-[70px]">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-lg-last">
            <div className="pl-[70px] mt-[50px] wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
              <div className="counter-content">
                <div className="section-title">
                  <div className="line"></div>
                    <h3 className="title">Cool facts <span> about this app</span></h3>
                </div>
                <p className="mt-[35px]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
              </div>
              <div className="row no-gutters">
                <div className="col-4">
                  <div className="max-w-[155px] h-[120px] rounded-[60px] relative z-[5] mt-[60px] counter-color-1 d-flex align-items-center justify-content-center">
                    <div className="counter-items text-center">
                      <span className="count countup text-uppercase" cup-end="125"></span>
                      <p className="text">Downloads</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="max-w-[155px] h-[120px] rounded-[60px] relative z-[5] mt-[60px] counter-color-2 d-flex align-items-center justify-content-center">
                    <div className="counter-items text-center">
                      <span className="count countup text-uppercase" cup-end="87"></span>
                      <p className="text">Active Users</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="max-w-[155px] h-[120px] rounded-[60px] relative z-[5] mt-[60px] counter-color-3 d-flex align-items-center justify-content-center">
                    <div className="counter-items text-center">
                      <span className="count countup text-uppercase" cup-end="59"></span>
                      <p className="text">User Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="video-content mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
              <img className="dots" src="assets/images/video/dots.svg" alt="dots" />
              <div className="video-wrapper">
                <div className="video-image">
                  <img src="assets/images/video/video.png" alt="video" />
                </div>
                <div className="video-icon">
                  <a href="https://www.youtube.com/watch?v=r44RKWyfcFw" className="video-popup glightbox">
                    <i className="lni lni-play"> </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}