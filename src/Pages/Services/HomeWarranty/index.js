import React from 'react'
import bg from '../../../Assets/images/page-header-bg.png'
import Electricity from '../../../Assets/images/real-estate.jpg'
import GasEnergy from '../../../Assets/images/live-agent.jpg'
const HomeWarranty = () => {
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
                <h1>Home Warranty</h1>
                <p>
                  We are committed to make the world a trusty place. We provide
                  the finest home warranty bundle and discounted deals that are
                  sustainable, efficient, integrated, and reasonable for you.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={bg} alt="bg" />
      </div>
      <div className="section-design pt-0">
        <div className="container">
          <div className="info-section m text-center">
            <div className="title">What We Are Offering</div>
            <div className="des p-0">
              <p>
                We are offering a home warranty service plan that helps you to
                repair or replace parts of a home’s systems and appliances.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="info-section">
                <div className="lable">
                  Deals
                  <div className="line"></div>
                </div>
                <div className="title sm-text">
                  Best for ever Home Warranty Deals
                </div>
                <div className="des p-0">
                  <p>
                    Pick the Plan that Works for You. See Our Home Warranty Plan
                    Options that covers Electrical, Plumbing, Hackathon
                    Appliances & More. Here you get the discounted deals of our
                    reliable home warranty company. Everything You Need - A/C,
                    Heating, Appliances, Plumbing & Electrical
                  </p>
                </div>
                <div className="read-more-btn"></div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="image-view">
                <div className="first-img">
                  <img src={Electricity} alt="About Us" />
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
                  <img src={GasEnergy} alt="About Us" />
                </div>
              </div>
            </div>
            <div className="col-lg-7 pl-5">
              <div className="info-section">
                <div className="lable">
                  Repair & replace
                  <div className="line"></div>
                </div>
                <div className="title sm-text">
                  Quick and Reliable Repair & replace
                </div>
                <div className="des">
                  <p>
                    Are you still struggling to get repair and replace your home
                    appliances? Then your struggle is real because it is
                    overwhelming to find reliable home warranty company. Say
                    goodbye to average & traditional home insurance companies
                    and switch today, get our fast service at cheapest rate
                  </p>
                </div>
                <div className="read-more-btn"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeWarranty
