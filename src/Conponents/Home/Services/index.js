import React from 'react'
import { Link } from 'react-router-dom'

import AboutImg1 from '../../../Assets/images/about-us-1.jpg'

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
            <div className="title">Take A Look At Our Services</div>
            <div className="des p-0">
              <p>
                Ovis. Dyng koldioxidbanta. Teragram planen. Äde metalogi.
                Krologi. Jån krolahurat. Suprasa antisiv. Pomining prodiviligt.
                Midade nektigt. Vinterkräksjuka. Tribefängen probev.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <div className="image-view">
                <div className="first-img">
                  <img src={AboutImg1} alt="About Us" />
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="info-section pl-5">
                <div className="title"><strong>01.</strong> Telecom</div>
                <div className="des p-0">
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
          </div>
        </div>
      </div>
      <div className="section-design">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="info-section">
                <div className="title"><strong>02.</strong> Real Estate</div>
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
                  <img src={AboutImg1} alt="About Us" />
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="info-section pl-5">
                <div className="title"><strong>03.</strong> Residential Energy</div>
                <div className="des p-0">
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
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeServices
