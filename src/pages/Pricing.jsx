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
            
            <a href="https://calendar.app.google/eKw5VvbdXUPmLa5Q8" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '2rem' }}>Schedule Free 30-Min Call</a>
            <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', color: 'var(--text-medium)' }}>Let's discuss your practice needs and how I can help</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing

