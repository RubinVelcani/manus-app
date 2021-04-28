import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

function App() {

  const [showMobileMenu, setShowMobileMenu] = useState(false)

  function toggleMobileMenu() {
    setShowMobileMenu(!showMobileMenu)
  }

  return (
    <div className="font-fontMain">
      <Header showMobileMenu={showMobileMenu} toggleMobileMenu={toggleMobileMenu} />
      <Router>
        <Routes showMobileMenu={showMobileMenu} toggleMobileMenu={toggleMobileMenu} />
      </Router>
      <Footer />
    </div >
  );
}

export default App;