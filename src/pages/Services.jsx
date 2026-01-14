import { Link } from 'react-router-dom'

function Services() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Services</h1>
          <p>Comprehensive practice management support tailored to your needs</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="services-list">
            <div className="service-item">
              <h3>Practice Formation</h3>
              <p>LLC setup, EIN registration, business bank accounts, and all the legal foundations your practice needs to get started on the right foot.</p>
            </div>
            <div className="service-item">
              <h3>Billing & Insurance</h3>
              <p>Credentialing with insurance panels, claims submission, payment processing, and ensuring you get paid accurately and on time.</p>
            </div>
            <div className="service-item">
              <h3>Platform Selection & Setup</h3>
              <p>Navigate the overwhelming world of practice management software. I'll help you choose and configure the right EMR, scheduling, and communication tools.</p>
            </div>
            <div className="service-item">
              <h3>Administrative Systems</h3>
              <p>Intake forms, consent documentation, HIPAA compliance, record keeping, and all the administrative workflows that keep your practice running.</p>
            </div>
            <div className="service-item">
              <h3>Financial Management</h3>
              <p>Bookkeeping, expense tracking, tax preparation support, and financial reporting so you always know where your practice stands.</p>
            </div>
            <div className="service-item">
              <h3>Growth Support</h3>
              <p>As your practice grows, I'll help you scale your operations, hire contractors, and maintain quality while expanding your client base.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="complexity-section">
        <div className="container">
          <div className="content-card">
            <h2>Customized to Your Practice</h2>
            <p>Every therapy practice is unique. Whether you're just starting out, transitioning from group practice, or looking to streamline an established practice, I tailor my services to meet you exactly where you are.</p>
            <p>You get personalized, one-on-one support from a real person who understands the unique challenges of running a therapy practice.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Let's discuss your practice needs</h2>
            <p>Schedule a free 30-minute call to explore business coaching and operational support for your practice.</p>
            <a href="https://calendar.app.google/eKw5VvbdXUPmLa5Q8" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Your Free Consultation</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services

