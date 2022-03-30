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
                <div className="title"> Ready to Try Different Experience?</div>
                <div className="des p-0">
                  <p>
                    We delivering unique experience for our member and enable
                    unlimited features that can help for explore their
                    requirement. If you are looking some services regarding
                    energy telecom & home warranty for support your brand on
                    demand services we can offer you real time deals.
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
