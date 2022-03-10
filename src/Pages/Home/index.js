import React from 'react'
import HomeAbout from '../../Conponents/Home/About'
import HomeMember from '../../Conponents/Home/Contact'
import Reviews from '../../Conponents/Home/Reviews'
import HomeServices from '../../Conponents/Home/Services'

const Home = () => {
  return (
    <>  
      <HomeAbout />
      <HomeServices />
      <Reviews />
      <HomeMember />
    </>
  )
}

export default Home
