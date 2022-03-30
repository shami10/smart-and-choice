import React from 'react'

import Slider1 from '../../../Assets/images/slider-1.png'
import Slider2 from '../../../Assets/images/slider-2.png'
import Slider3 from '../../../Assets/images/slider-3.png'
import Slider4 from '../../../Assets/images/slider-4.png'
import './style.scss'

const Slider = () => {
  return (
    <>
      <div className="main-slider">
        <div
          data-ride="carousel"
          class="carousel carousel-fade"
          id="carousel-example-captions"
        >
          <ol class="carousel-indicators">
            <li
              class="active"
              data-slide-to="0"
              data-target="#carousel-example-captions"
            ></li>
            <li
              data-slide-to="1"
              data-target="#carousel-example-captions"
              class=""
            ></li>
            <li
              data-slide-to="2"
              data-target="#carousel-example-captions"
              class=""
            ></li>
            <li
              data-slide-to="3"
              data-target="#carousel-example-captions"
              class=""
            ></li>
          </ol>
          <div role="listbox" class="carousel-inner">
            <div class="carousel-item active">
              <img src={Slider1} alt="slider" />
              <div class="carousel-caption">
                <h3>Brighten Your World with Smart Choices Energy Suppliers</h3>
                <p>
                  Perfect Energy Plans with environmental friendly Energy
                  Providers
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={Slider4} alt="slider" />
              <div class="carousel-caption">
                <h3>
                  Delivers Fast and Secure Internet Cable Cable and Phone
                  services.
                </h3>
                <p>
                  Unlimited Internet HD TV Streaming Unlimited Nationwide Phone
                  calls
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={Slider3} alt="slider" />
              <div class="carousel-caption">
                <h3>Choose Your Home Warranty Plan for your Home Needs</h3>
                <p>
                  Get the basics covered Protect your budget and your peace of
                  mind.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={Slider2} alt="slider" />
              <div class="carousel-caption">
                <h3>Get in touch with our Customer Care</h3>
                <p>
                  representative for you product query If you are deaf, or have
                  a hearing impairment contact us through the Smart and Choice.
                </p>
              </div>
            </div>
          </div>
          <a
            data-slide="prev"
            role="button"
            href="#carousel-example-captions"
            class="left carousel-control"
          >
            <span aria-hidden="true" class="icon-prev"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            data-slide="next"
            role="button"
            href="#carousel-example-captions"
            class="right carousel-control"
          >
            <span aria-hidden="true" class="icon-next"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </>
  )
}

export default Slider
