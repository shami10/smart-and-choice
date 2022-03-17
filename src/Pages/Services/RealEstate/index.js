import React from 'react'
import bg from '../../../Assets/images/page-header-bg.png'
import AboutImg1 from '../../../Assets/images/about-us-1.jpg'
import Digital from '../../../Assets/images/digital.webp'
import LiveAgent from '../../../Assets/images/live-agent.jpg'
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
                  Our greatest concern is our relationship with our clients
                  that’s why we go to extraordinary lengths to ensure you have a
                  better customer experience at every possible opportunity. Our
                  customer hub provides a range of information to get you up and
                  running in no time. We build teams of exceptional individuals
                  who offer Digital-assisted and Agent-assisted next-level
                  client experiences and innovative solutions. Our teams consist
                  of trained, experienced, and multi-lingual staff.
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
            <div className="title">
              We Provide Best Customer Support Services
            </div>
            <div className="des p-0">
              <p>
                We are commied to providing our customers with the highest
                quality software support. Whenever you try to reach to us you
                will face knowledgeable, friendly representatives. We strive to
                provide you best product services. Our support system provide
                professional and helpful responses to you while maintain the
                highest service standards. We ensure the accuracy of provided
                information and high attention to details
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="info-section">
                <div className="lable">
                  Digital Assistance
                  <div className="line"></div>
                </div>
                <div className="title sm-text">
                  Hook up with us by fast interaction, scalability, Highly
                  professional Virtual assistance
                </div>
                <div className="des p-0">
                  <p>
                    We do more in less time. We offer digital-assisted
                    assistance to those clients who want to seek help through
                    live chat, voice, and online help forums. Our digital
                    assistance brings convenience to our clients. Our digital
                    assistance improves efficiency and provides better
                    assistance to our clients. We respond fastly to our clients
                    who are looking to leverage time and productivity. We
                    focused on providing highly professionals and committed
                    virtual assistance to our clients to ease up their work.
                  </p>
                </div>
                <div className="read-more-btn"></div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="image-view">
                <div className="first-img">
                  <img src={Digital} alt="About Us" />
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
                  <img src={LiveAgent} alt="About Us" />
                </div>
              </div>
            </div>
            <div className="col-lg-7 pl-5">
              <div className="info-section">
                <div className="lable">
                  Live-Agent Assistaance
                  <div className="line"></div>
                </div>
                <div className="title sm-text">
                  Stay in Touch with our effective communicators, Social
                  Automation, contextual Support
                </div>
                <div className="des">
                  <p>
                    We always stay close to our clients by 24/7 and 365 days of
                    support. We serve you through highperforming agents to
                    improve the quality and consistency of your experience. We
                    create meaningful, personalized connections with our
                    customers while delivering real outcomes. In case of high
                    website traffic, we are ready to assist you through a call,
                    live chat, or social media correspondence. Our agents don’t
                    let you wait to answer your question and provide accurate
                    information. Our customers receive prompt responses which
                    have been tailored to provide information to make them
                    self-sufficient but solve their queries as well.
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

export default RealEstate
