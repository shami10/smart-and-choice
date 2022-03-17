import React from 'react'

import Slider1 from '../../../Assets/images/slider-1.png'
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
          </ol>
          <div role="listbox" class="carousel-inner">
            <div class="carousel-item active">
              <img src={Slider1} alt="slider" />
              <div class="carousel-caption">
                <h3>Brighten Your World with Smart Choices.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={Slider1} alt="slider" />
              <div class="carousel-caption">
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={Slider1} alt="slider" />
              <div class="carousel-caption">
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
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
