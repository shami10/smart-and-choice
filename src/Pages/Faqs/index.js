import React from 'react'
import bg from '../../Assets/images/page-header-bg.png'
import './style.scss'

const Faqs = () => {
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
                <h1>Faqs</h1>
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
      <div className="section-design pt-0 pb-0">
        <div className="container">
          <div className="info-section m text-center">
            <div className="title">Frequently Asked Question(s)</div>
            <div className="des p-0">
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="faq">
        <div className="container">
          <ul className="faq-list">
            <li
              data-aos="fade-up"
              data-aos-delay="100"
              className="aos-init aos-animate"
            >
              <a
                data-toggle="collapse"
                className="collapsed"
                href="#faq1"
                aria-expanded="false"
              >
                Non consectetur a erat nam at lectus urna duis?{' '}
                <i className="fas fa-arrow-up"></i>
              </a>
              <div id="faq1" className="collapse" data-parent=".faq-list">
                <p>
                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                  volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                  magna fringilla urna porttitor rhoncus dolor purus non.
                </p>
              </div>
            </li>

            <li
              data-aos="fade-up"
              data-aos-delay="200"
              className="aos-init aos-animate"
            >
              <a data-toggle="collapse" href="#faq2" className="collapsed">
                Feugiat scelerisque varius morbi enim nunc faucibus a
                pellentesque? <i className="fas fa-arrow-up"></i>
              </a>
              <div id="faq2" className="collapse" data-parent=".faq-list">
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi. Id interdum velit laoreet id donec ultrices.
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                  ultrices eros in cursus turpis massa tincidunt dui.
                </p>
              </div>
            </li>

            <li
              data-aos="fade-up"
              data-aos-delay="300"
              className="aos-init aos-animate"
            >
              <a data-toggle="collapse" href="#faq3" className="collapsed">
                Dolor sit amet consectetur adipiscing elit pellentesque habitant
                morbi? <i className="fas fa-arrow-up"></i>
              </a>
              <div id="faq3" className="collapse" data-parent=".faq-list">
                <p>
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                  sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                  nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                  pellentesque eu tincidunt. Lectus urna duis convallis
                  convallis tellus. Urna molestie at elementum eu facilisis sed
                  odio morbi quis
                </p>
              </div>
            </li>

            <li
              data-aos="fade-up"
              data-aos-delay="400"
              className="aos-init aos-animate"
            >
              <a data-toggle="collapse" href="#faq4" className="collapsed">
                Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?{' '}
                <i className="fas fa-arrow-up"></i>
              </a>
              <div id="faq4" className="collapse" data-parent=".faq-list">
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi. Id interdum velit laoreet id donec ultrices.
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                  ultrices eros in cursus turpis massa tincidunt dui.
                </p>
              </div>
            </li>

            <li
              data-aos="fade-up"
              data-aos-delay="500"
              className="aos-init aos-animate"
            >
              <a data-toggle="collapse" href="#faq5" className="collapsed">
                Tempus quam pellentesque nec nam aliquam sem et tortor
                consequat? <i className="fas fa-arrow-up"></i>
              </a>
              <div id="faq5" className="collapse" data-parent=".faq-list">
                <p>
                  Molestie a iaculis at erat pellentesque adipiscing commodo.
                  Dignissim suspendisse in est ante in. Nunc vel risus commodo
                  viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                  bibendum est. Purus gravida quis blandit turpis cursus in
                </p>
              </div>
            </li>

            <li
              data-aos="fade-up"
              data-aos-delay="600"
              className="aos-init aos-animate"
            >
              <a data-toggle="collapse" href="#faq6" className="collapsed">
                Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                turpis nunc eget lorem dolor?{' '}
                <i className="fas fa-arrow-up"></i>
              </a>
              <div id="faq6" className="collapse" data-parent=".faq-list">
                <p>
                  Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris
                  vitae ultricies leo integer malesuada nunc vel. Tincidunt eget
                  nullam non nisi est sit amet. Turpis nunc eget lorem dolor
                  sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                  Pellentesque diam volutpat commodo sed egestas egestas
                  fringilla phasellus faucibus. Nibh tellus molestie nunc non
                  blandit massa enim nec.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Faqs
