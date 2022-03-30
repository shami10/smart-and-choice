import React from 'react'
import { Link } from 'react-router-dom'

import AboutImg1 from '../../../Assets/images/about-us-1.jpg'
import RealEstate from '../../../Assets/images/customer-support.jpg'
import ResidentialEnergy from '../../../Assets/images/real-estate.jpg'
import Telecom from '../../../Assets/images/telecom.jpg'
import Warranty from '../../../Assets/images/home-warranty.jpg'

const HomeServices = () => {
  return (
    <>
      <div className="section-design bg-light-theme">
        <div className="container">
          <div className="info-section m text-center">
            {/* <div className="lable m-auto">
                  Info
                  <div className="line"></div>
                </div> */}
            <div className="title">Have a Look at our Services:</div>
            <div className="des p-0">
              <p>
                We are commited to provide various reliable and sustainable
                services including telecom, home warranty, residential energy,
                and real estate.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <div className="image-view">
                <div className="first-img">
                  <img src={Telecom} alt="About Us" />
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="info-section pl-5">
                <div className="title">
                  <strong>01.</strong> Telecom
                </div>
                <div className="des p-0">
                  <p>
                    We are committed to making the world a better place. We
                    deliver the promise of the digital world by enhancing the
                    ability of humans, businesses, and society to do more new
                    and better. We provide the finest ultra-fast telecom
                    services .
                  </p>
                </div>
                <div className="read-more-btn">
                  <Link to="/services/telecom">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-design">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="info-section">
                <div className="title">
                  <strong>02.</strong> Customer Support
                </div>
                <div className="des">
                  <p>
                    We are offering Reliable cost effective 24/7 Customer
                    support for helping your product of services which you are
                    represent. We have experienced and highly recommended staff
                    who will never ever missed your potential customer with 100%
                    Satisfaction.
                  </p>
                </div>
                <div className="read-more-btn">
                  <Link to="/services/customer-support">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="image-view">
                <div className="first-img">
                  <img src={RealEstate} alt="About Us" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-design bg-light-theme">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="image-view">
                <div className="first-img">
                  <img src={ResidentialEnergy} alt="About Us" />
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="info-section pl-5">
                <div className="title">
                  <strong>03.</strong> Residential Energy
                </div>
                <div className="des p-0">
                  <p>
                    Energy matters – it powers our lives every day. And where it
                    comes from matters too.
                  </p>
                  <p>
                    A different kind of energy company. Always fair, always
                    affordable, hassle-free, environmental friendly always
                    green. We supply 100% renewable and cleaner energy, smart
                    home technology .
                  </p>
                </div>
                <div className="read-more-btn">
                  <Link to="/services/residential-energy">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-design">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="info-section">
                <div className="title">
                  <strong>04.</strong> Home Warranty
                </div>
                <div className="des">
                  <p>
                    We are committed to make the world a trusty place. We
                    provide the finest home warranty bundle and discounted deals
                    that are sustainable, efficient, integrated, and reasonable
                    for you.
                  </p>
                  <p>
                    We are offering a home warranty service plan that helps you
                    to repair or replace parts of a home’s systems and
                    appliances.
                  </p>
                </div>
                <div className="read-more-btn">
                  <Link to="/services/home-warranty">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="image-view">
                <div className="first-img">
                  <img src={Warranty} alt="About Us" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeServices
