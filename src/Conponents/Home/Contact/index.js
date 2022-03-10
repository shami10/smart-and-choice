import React from 'react'
import { Link } from 'react-router-dom'

import Member from '../../../Assets/images/contact-home-member.png'

const HomeMember = () => {
  return (
    <>
      <div className="section-design bg-light-theme pb-0 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="info-section mt-5">
                <div className="lable">
                  Became a member
                  <div className="line"></div>
                </div>
                <div className="title"> Ready to try different work experience now?</div>
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
                  <Link to="/contact-us">Contact Us</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="image-view">
                <div className="first-img">
                  <img src={Member} alt="Member" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeMember
