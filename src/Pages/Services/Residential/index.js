import React from 'react'
import bg from '../../../Assets/images/page-header-bg.png'
import Electricity from '../../../Assets/images/electricity.jpg'
import GasEnergy from '../../../Assets/images/gas-energy.jpg'
const Residential = () => {
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
                <h1>Residential Energy</h1>
                <p>
                  Energy matters it powers our lives every day. And where it
                  comes from matters too. A different kind of energy company.
                  Always affordable, hassle-free, and green.
                </p>
                <div className="banner-call-btn">
                  <strong>Call Us:</strong>
                  <a href="tel:(210)905-0752" className="btn btn-white-light">
                  <i className="fas fa-phone"></i>
                    (210) 905-0752
                  </a>
                  <a href="tel:(216)208-1267" className="btn btn-dark-light">
                    <i className="fas fa-phone"></i>
                    (216) 208-1267
                  </a>
                </div>
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
                We believe in sustainable and secure energy. We provide our
                customers with valuable services. We have an commitment to
                safely and reliably electricity and gas to millions of people.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="info-section">
                <div className="lable">
                  Electricity Energy
                  <div className="line"></div>
                </div>
                <div className="title sm-text">
                  Get Green, Low Cost, Cleanest Sustainable Electric Energy
                </div>
                <div className="des p-0">
                  <p>
                    It is what you get when you pick the best power company.
                    Green vibes- feel-good vibes. We are helping move to a
                    zero-carbon future. We offer 100% renewable electricity to
                    all our clients around the world. No tricks, offers just low
                    rates everyday.
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
                  Gas Energy
                  <div className="line"></div>
                </div>
                <div className="title sm-text">
                  Get Natural, non-toxic, less expensive, and more efficient
                  domestic Gas
                </div>
                <div className="des">
                  <p>
                    We sell and deliver natural gas nationwide. We are investing
                    in modernizing our natural gas infrastructure and are
                    committed to eliminating cast iron pipe in all territories.
                    We are helping our clients reach their own climate goals
                    through clean energy solutions.
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

export default Residential
