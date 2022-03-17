import React from 'react'
import bg from '../../../Assets/images/page-header-bg.png'
import AboutImg1 from '../../../Assets/images/about-us-1.jpg'
const RealEstate = () => {
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
                <h1>Customer Support</h1>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
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
            <div className="title">We Provide Best Customer Support Services</div>
            <div className="des p-0">
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="info-section">
                <div className="lable">
                  Home Owners
                  <div className="line"></div>
                </div>
                <div className="title sm-text">
                  Get Cost Effective & High-Speed Internet unlimited TV
                  Channels, National & International phone calls.
                </div>
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
                <div className="read-more-btn"></div>
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
            <div className="col-lg-7 pl-5">
              <div className="info-section">
                <div className="lable">
                  Real Estate Professionals
                  <div className="line"></div>
                </div>
                <div className="title sm-text">
                  Let’s tie up with our exclusive cable tv cost effective offers
                </div>
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
                  Service Providers
                  <div className="line"></div>
                </div>
                <div className="title sm-text">
                  Connect with your friends’ families & Many more by using our
                  fast home phone offer
                </div>
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
                <div className="read-more-btn"></div>
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
    </>
  )
}

export default RealEstate
