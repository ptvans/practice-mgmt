import { Link } from 'react-router-dom'

function Pricing() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Pricing</h1>
          <p>Transparent, flexible pricing that grows with your practice</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="pricing-simple">
            <div className="price-large">
              <span className="currency">$</span>
              <span className="amount">490</span>
              <span className="period">per month</span>
            </div>
            
            <div className="pricing-terms">
              <h3>Terms:</h3>
              <p>No long term contracts. Cancel any time.</p>
            </div>
            
            <Link to="/chat" className="btn btn-primary" style={{ marginTop: '2rem' }}>Get Started</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing

