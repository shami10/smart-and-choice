import React from 'react'
import './style.scss'
const TopHeader = () => {
  return (
    <>
      <div className="topHeader">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <a href="mailto:">
                <i className="fas fa-envelope"></i>
                info@smartandchoice.com
              </a>
              <a href="tel:">
                <i className="fas fa-phone-alt"></i>
                (123) 1234-123
              </a>
            </div>
            <div className="col-6">
              <div className="social-account">
                <a href="facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopHeader
