import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import MobileRoutes from './MobileRoutes'
import DesktopRoutes from './DesktopRoutes'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

function App() {

  const [showMobileMenu, setShowMobileMenu] = useState(false)

  function toggleMobileMenu() {
    setShowMobileMenu(!showMobileMenu)
  }

  return (
    <Router>
      <div className='z-50'>
        <Header showMobileMenu={showMobileMenu} toggleMobileMenu={toggleMobileMenu} />
      </div>
      <div className='z-0 block font-fontMain md:hidden'>
        <MobileRoutes showMobileMenu={showMobileMenu} toggleMobileMenu={toggleMobileMenu} />
      </div>
      <div className='z-0 hidden font-fontMain md:block'>
        <DesktopRoutes />
      </div>
      <div className='z-50'>
        <Footer />
      </div>
    </Router>
  );
}

export default App;