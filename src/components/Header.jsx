import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo">Helena</Link>
          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMobileMenu}>Home</Link></li>
            <li><Link to="/services" className={`nav-link ${isActive('/services')}`} onClick={closeMobileMenu}>Services</Link></li>
            <li><Link to="/pricing" className={`nav-link ${isActive('/pricing')}`} onClick={closeMobileMenu}>Pricing</Link></li>
            <li><Link to="/starting-practice" className={`nav-link ${isActive('/starting-practice')}`} onClick={closeMobileMenu}>Starting a Practice</Link></li>
            <li><Link to="/chat" className={`nav-link cta-link ${isActive('/chat')}`} onClick={closeMobileMenu}>Chat with Me</Link></li>
          </ul>
          <button 
            className="mobile-menu-toggle" 
            aria-label="Toggle menu"
            onClick={toggleMobileMenu}
          >
            <span style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translate(-5px, 6px)' : '' }}></span>
            <span style={{ opacity: mobileMenuOpen ? '0' : '1' }}></span>
            <span style={{ transform: mobileMenuOpen ? 'rotate(45deg) translate(-5px, -6px)' : '' }}></span>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header

