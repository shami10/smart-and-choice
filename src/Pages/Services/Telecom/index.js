import React from 'react'
import bg from '../../../Assets/images/page-header-bg.png'
import InternetDeal from '../../../Assets/images/internet-deal.jpg'
import CableTv from '../../../Assets/images/cable-tv.jpg'
import HomePhone from '../../../Assets/images/home-phone.jpg'
const Telecom = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className="inner-page-bg">
        <div className="title">
          <div className="container">
            <div className="row">
              <div className="col-10">
                <h1>Telecom</h1>
                <p>
                  We are committed to making the world a better place. We
                  deliver the promise of the digital world by enhancing the
                  ability of humans, businesses, and society to do more new and
                  better. We provide the finest ultra-fast internet deals, Cable
                  Tv, and Home phone services that are sustainable, efficient,
                  integrated, and streamlined services worldwide. We provide a
                  full solution for managing the lifecycle of network and data
                  equipment. Traditional technologies such as wireline
                  telephone, radio, and television once dominated the
                  telecommunications universe, but wireless mobile and internet
                  technology are quickly becoming the new norm.
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
                We are offering high-speed internet, fixed-line unlimited
                telephone calls, and wireless services. We transform how people,
                businesses and things connect through innovative communication
                and technology solutions. Experience Pakistan’s finest reliable
                internet, TV, and phone services and save your finances.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="info-section">
                <div className="lable">
                  Internet Deals
                  <div className="line"></div>
                </div>
                <div className="title sm-text">
                  Get economical & ultra-fast reliable internet
                </div>
                <div className="des p-0">
                  <p>
                    Are you still struggling to get high-speed internet
                    services? Then your struggle is real because it is
                    overwhelming to find reliable internet services. Say goodbye
                    to average internet speed and Switch today, get faster speed
                    at cheap rates. As we promise to provide high-speed
                    telecommunication services in reliable packages. Improve
                    your work-from-home connectivity with us by availing
                    yourself of our super-fast internet offers.
                  </p>
                </div>
                <div className="read-more-btn"></div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="image-view">
                <div className="first-img">
                  <img src={InternetDeal} alt="About Us" />
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
                  <img src={CableTv} alt="About Us" />
                </div>
              </div>
            </div>
            <div className="col-lg-7 pl-5">
              <div className="info-section">
                <div className="lable">
                  Cable Tv
                  <div className="line"></div>
                </div>
                <div className="title sm-text">
                  Enjoy hassle-free entertainment with our great offers
                </div>
                <div className="des">
                  <p>
                    Want to enjoy broadcast tv at home that is just right for
                    you, on the device of your choice? Look no further! Get the
                    best cable Tv plan for you. We are providing a new way of
                    exploring the broadband speed, deals, packages, and bundles
                    with exciting additional features. These cable deals have so
                    much to offer it may be hard to choose just one. Also at
                    economical rates to watch your favorite shows.
                  </p>
                </div>
                <div className="read-more-btn"></div>
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
                <div className="lable">
                  Home Phone Deals
                  <div className="line"></div>
                </div>
                <div className="title sm-text">
                  Stay in touch with your peers, families through our cheapest
                  home phone call packages
                </div>
                <div className="des p-0">
                  <p>
                    We are assisting you to keep in touch with your loved ones,
                    peer, family, or business partner with our unlimited
                    reasonable first-class quality call offers, with no
                    interruption and without having to worry about running out
                    of minutes. These offers are right at your fingertips. This
                    is why we offer unlimited calling offers at the cheapest
                    rates So don’t limit yourself to peak or off-peak rates. Now
                    you can talk for however long whenever you want to or never
                    miss out on the things that matter the most for you, your
                    monthly bill will always be the same. Switching your home
                    phone to Pure Telecom means unrivaled INTERNATIONAL rates
                    for both landline and mobile calls. In case of far from
                    home, our phone call offers will bring your loved ones
                    closer and will not make you feel homesick anymore.
                  </p>
                </div>
                <div className="read-more-btn"></div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="image-view">
                <div className="first-img">
                  <img src={HomePhone} alt="About Us" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Telecom
