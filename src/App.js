import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './Conponents/Common/Footer'
import Header from './Conponents/Common/Header'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Faqs from './Pages/Faqs'
import Policy from './Pages/Policy'
import Pricing from './Pages/Pricing'
import Telecom from './Pages/Services/Telecom'
import RealEstate from './Pages/Services/RealEstate'
import Residential from './Pages/Services/Residential'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about-us" exact element={<About />} />
          <Route path="/pricing" exact element={<Pricing />} />
          <Route path="/services/telecom" exact element={<Telecom />} />
          <Route path="/services/real-estate" exact element={<RealEstate />} />
          <Route path="/services/residential-energy" exact element={<Residential />} />
          <Route path="/contact-us" exact element={<Contact />} />
          <Route path="/faqs" exact element={<Faqs />} />
          <Route path="/privacy-policy" exact element={<Policy />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
