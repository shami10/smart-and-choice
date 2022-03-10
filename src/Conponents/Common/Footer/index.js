import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../../Assets/images/logo.svg'
import './style.scss'

const Footer = () => {
  return (
    <>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="footer-logo">
                <img src={Logo} alt="logo" />
              </div>
              <div className="info">
                Ovis. Dyng koldioxidbanta. Teragram planen. Äde metalogi.
                Krologi. Jån krolahurat.Dyng koldioxidbanta. Teragram planen.
              </div>
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
            <div className="col-2">
              <div className="footer-links">
                <div className="title">Company</div>
                <ul>
                  <li>
                    <Link to="/services/telecom">Telecom</Link>
                  </li>
                  <li>
                    <Link to="/services/real-estate">Real Estate</Link>
                  </li>
                  <li>
                    <Link to="/services/residential-energy">
                      Residential Energy
                    </Link>
                  </li>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/pricing">Pricing</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-2">
              <div className="footer-links">
                <div className="title">Support</div>
                <ul>
                  <li>
                    <Link to="/faqs">Faqs</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-3">
              <div className="footer-links">
                <div className="title">Contact</div>
                <ul>
                  <li>
                    <a href="mailto:info@smartandchoice.com">
                      info@smartandchoice.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:">(123) 1234-123</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="container">
          2022 &copy; All Rights Reserved. Smart and Choice
        </div>
      </div>
    </>
  )
}

export default Footer
