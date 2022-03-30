import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import TopHeader from '../TopHeader'
import Logo from '../../../Assets/images/logo.svg'

import './style.scss'

const Header = () => {
  return (
    <>
      <div className="both-headers">
        <TopHeader />
        <div className="main-header">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light p-0">
              <Link className="navbar-brand" to="/">
                <img src={Logo} alt="Logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Services
                    </Link>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <Link className="dropdown-item" to="/services/telecom">
                        Telecom
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/services/customer-support"
                      >
                        Customer Support
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/services/residential-energy"
                      >
                        Residential Energy
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/services/home-warranty"
                      >
                        Home Warranty
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about-us">
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/faqs">
                      Faqs
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact-us">
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
