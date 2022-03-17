import React from 'react'
import HomeAbout from '../../Conponents/Home/About'
import Slider from '../../Conponents/Home/Banner'
import HomeMember from '../../Conponents/Home/Contact'
import Reviews from '../../Conponents/Home/Reviews'
import HomeServices from '../../Conponents/Home/Services'

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Slider/>
      <HomeAbout />
      <HomeServices />
      <Reviews />
      <HomeMember />
    </>
  )
}

export default Home
