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
      <Header showMobileMenu={showMobileMenu} toggleMobileMenu={toggleMobileMenu} />
      <div className='block font-fontMain md:hidden'>
        <MobileRoutes showMobileMenu={showMobileMenu} toggleMobileMenu={toggleMobileMenu} />
      </div>
      <div className='hidden font-fontMain md:block'>
        <DesktopRoutes />
      </div>
      <Footer />
    </Router>
  );
}

export default App;