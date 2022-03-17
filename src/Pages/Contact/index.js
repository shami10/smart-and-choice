import React from 'react'

import bg from '../../Assets/images/page-header-bg.png'
import './style.scss'

const Contact = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className="inner-page-bg">
        <div className="title">
          <div className="container">
            <div className="row">
              <div className="col-7">
                <h1>Contact Us</h1>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={bg} alt="bg" className="mb-0" />
      </div>
      <div className="contact-form-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
              <div className="cont-box">
                <div className="in-touch-title">Get In Touch</div>
                <div className="row">
                  <div className="col-12">
                    <div className="form-title">Leave us a message</div>
                  </div>
                  <div className="col-lg-6">
                    <div className="contact-form">
                      <form>
                        <div className="form-fields">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="form-fields">
                          <input
                            className="form-control"
                            type="email"
                            placeholder="Email Address"
                          />
                        </div>
                        <div className="form-fields">
                          <textarea
                            className="form-control"
                            type="text"
                            rows="4"
                            placeholder="Your Message"
                          ></textarea>
                        </div>
                        <div className="form-btn">
                          <button className="btn btn-primary btn-block">
                            Send
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="addresses">
                      <div className="address-item">
                        <div className="icon">
                          <i className="fas fa-map-marker"></i>
                        </div>
                        <div className="text">
                          Infomation technologies building, Victoria Island,
                          Lagos, Nigeria.
                        </div>
                      </div>
                      <div className="address-item">
                        <div className="icon">
                          <i className="fas fa-envelope"></i>
                        </div>
                        <div className="text">
                          <a href="mailto:">info@smartandchoice.com</a>
                        </div>
                      </div>
                      <div className="address-item">
                        <div className="icon">
                        <i class="fas fa-phone-volume"></i>
                        </div>
                        <div className="text">
                          <a href="tel:">(123) 1234-123</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
