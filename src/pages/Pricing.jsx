function Pricing() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Pricing</h1>
          <p>A core monthly plan with a la carte services, such as marketing support</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="pricing-simple">
            <div className="price-large">
              <span className="currency">$</span>
              <span className="amount">485</span>
              <span className="period">per month</span>
            </div>
            <h4>Ideal for new practices</h4>
            <div className="pricing-includes">
              <h3>What's Included:</h3>
              
              <div className="benefits-grid">
                <div className="benefit-column">
                  <h4>Administration & Support</h4>
                  <ul className="check-list">
                    <li>1 clinician seat</li>
                    <li>Business formation guidance</li>
                    <li>10 hours of practice administration per month</li>
                    <li>Weekly check-ins</li>
                  </ul>
                </div>
                
                <div className="benefit-column">
                  <h4>Practice Management</h4>
                  <ul className="check-list">
                    <li>EHR platform setup</li>
                    <li>Billing system setup</li>
                    <li>Insurance credentialing support</li>
                    <li>Monthly & annual financial reports</li>
                  </ul>
                </div>
                
                <div className="benefit-column">
                  <h4>Tools & Features</h4>
                  <ul className="check-list">
                    <li>Customizable client portal</li>
                    <li>Therapy notes templates</li>
                    <li>Client messaging</li>
                    <li>Scheduling & appointment reminders</li>
                  </ul>
                </div>
              </div>
              
            </div>
            
            <div className="pricing-terms">
              <h3>Terms:</h3>
              <p>No long term contracts. Cancel any time.</p>
            </div>
            
            <a href="https://calendar.app.google/eKw5VvbdXUPmLa5Q8" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '2rem' }}>Schedule Free 30-Min Call</a>
            <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', color: 'var(--text-medium)' }}>Let's discuss your practice needs and how I can help</p>
          </div>

          <div className="addon-section">
            <div className="addon-card">
              <div className="addon-header">
                <span className="addon-label">Add-On</span>
                <h3>Marketing Package</h3>
                <p className="addon-description">Grow your practice with professional marketing support</p>
              </div>
              
              <ul className="check-list addon-features">
                <li>Videos and ads for social media</li>
                <li>Marketing website</li>
                <li>Advertising support</li>
              </ul>
              
              <a href="https://calendar.app.google/eKw5VvbdXUPmLa5Q8" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Learn More on a Call</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing
