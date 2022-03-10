import React, { useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import ReviewP from '../../../Assets/images/ceo.png'
import 'swiper/css/bundle'
import './style.scss'

const Reviews = () => {
  return (
    <>
      <div className="section-design pb-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="info-section">
                <div className="lable">
                  Reviews
                  <div className="line"></div>
                </div>
                <div className="title">
                  What our customers <br /> are saying
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="reviews">
          <div className="container-fluid">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              navigation={{ clickable: true }}
              pagination={{ clickable: true }}
              spaceBetween={50}
              slidesPerView={2.5}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="review-item">
                  <div className="review-msg">
                    Our team has been working at frispes for almost 2 months
                    because our office still closed. During working at frispes,
                    we feel a new experience, we can feel working with a
                    beautiful, modern, and comfortable space. And cozy cafe with
                    high-speed internet in there. Thank you for frispes and
                    team.
                  </div>
                  <div className="review-person">
                    <div className="img">
                      <img src={ReviewP} alt="person" />
                    </div>
                    <div className="name">
                      <h5>Pedro Ibanez</h5>
                      <p>UI Designer at Google</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="review-item">
                  <div className="review-msg">
                    Our team has been working at frispes for almost 2 months
                    because our office still closed. During working at frispes,
                    we feel a new experience, we can feel working with a
                    beautiful, modern, and comfortable space. And cozy cafe with
                    high-speed internet in there. Thank you for frispes and
                    team.
                  </div>
                  <div className="review-person">
                    <div className="img">
                      <img src={ReviewP} alt="person" />
                    </div>
                    <div className="name">
                      <h5>Pedro Ibanez</h5>
                      <p>UI Designer at Google</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="review-item">
                  <div className="review-msg">
                    Our team has been working at frispes for almost 2 months
                    because our office still closed. During working at frispes,
                    we feel a new experience, we can feel working with a
                    beautiful, modern, and comfortable space. And cozy cafe with
                    high-speed internet in there. Thank you for frispes and
                    team.
                  </div>
                  <div className="review-person">
                    <div className="img">
                      <img src={ReviewP} alt="person" />
                    </div>
                    <div className="name">
                      <h5>Pedro Ibanez</h5>
                      <p>UI Designer at Google</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="review-item">
                  <div className="review-msg">
                    Our team has been working at frispes for almost 2 months
                    because our office still closed. During working at frispes,
                    we feel a new experience, we can feel working with a
                    beautiful, modern, and comfortable space. And cozy cafe with
                    high-speed internet in there. Thank you for frispes and
                    team.
                  </div>
                  <div className="review-person">
                    <div className="img">
                      <img src={ReviewP} alt="person" />
                    </div>
                    <div className="name">
                      <h5>Pedro Ibanez</h5>
                      <p>UI Designer at Google</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reviews
