import React from 'react'
import { Link } from 'react-router-dom'

import AboutImg1 from '../../../Assets/images/about-us-1.jpg'
import AboutImg2 from '../../../Assets/images/about-us-2.jpg'
import CEO from '../../../Assets/images/ceo.png'

import './style.scss'

const HomeAbout = () => {
  return (
    <>
      <div className="section-design">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="info-section">
                <div className="lable">
                  Info
                  <div className="line"></div>
                </div>
                <div className="title">About Us</div>
                <div className="des">
                  <p>
                    Ovis. Dyng koldioxidbanta. Teragram planen. Äde metalogi.
                    Krologi. Jån krolahurat. Suprasa antisiv. Pomining
                    prodiviligt. Midade nektigt. Vinterkräksjuka. Tribefängen
                    probev. Afyr usa. Nypont bement. Prelig telengen. Pres
                    avvisningsfre kvens. Traling ojusade.
                  </p>
                  <p>
                    Ovis. Dyng koldioxidbanta. Teragram planen. Äde metalogi.
                    Krologi. Jån krolahurat.
                  </p>
                </div>
                <div className="read-more-btn">
                  <Link to="/about-us">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="image-view">
                <div className="first-img">
                  <img src={AboutImg1} alt="About Us" />
                </div>
                <div className="second-img">
                  <div className="img">
                    <img src={AboutImg2} alt="About Us" />
                  </div>
                  <div className="ceo">
                    <img src={CEO} alt="ceo" />
                    <div className="ceo-name">
                      <div>John Russel</div>
                      <div className="role">CEO</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeAbout
