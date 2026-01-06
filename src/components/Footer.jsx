import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2026 Helena Practice Management. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

