import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <img 
              src={`${import.meta.env.BASE_URL}images/paul-van-slembrouck-profile-pic.jpg`}
              alt="Helena Practice Management" 
              className="profile-photo"
            />
            <h1>Business support that frees you to focus on what matters most — your clients.</h1>
            <p className="hero-subtitle">Hi, I'm Thom. I'm a real person who will help you set up and run your private therapy practice. I am your on-demand practice manager.</p>
            <div className="hero-cta">
              <a href="https://calendar.app.google/eKw5VvbdXUPmLa5Q8" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Schedule Free 30-Min Call</a>
              <Link to="/services" className="btn btn-secondary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="complexity-section">
        <div className="container">
          <div className="content-card">
            <h2>I manage the complexity so you don't have to think about it.</h2>
            <p>As a therapist and business owner, there are dozens of platforms you could use… Rula, Headway, Alma, SimplePractice.. the list goes on.</p>
            <p>I'll help you choose and set up the right tools, from EMR systems to scheduling platforms.</p>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2>What I Handle For You</h2>
          <div className="benefits-list">
            <div className="benefit-item">
              <h3>Practice Setup</h3>
              <p>From business formation to tax IDs, provider numbers, and bookkeeping, I'll guide you through every step of establishing your practice.</p>
            </div>
            <div className="benefit-item">
              <h3>Client Scheduling and Communications</h3>
              <p>I set up your appointments, send reminders, and manage your calendar so you can focus on your clients.</p>
            </div>
            <div className="benefit-item">
              <h3>Billing & Insurance</h3>
              <p>Assistance with credentialing, claims, and billing systems.</p>
            </div>
            <div className="benefit-item">
              <h3>Platform Management</h3>
              <p>I'll help you choose and set up the right tools, from EHR platforms to telehealth.</p>
            </div>
            <div className="benefit-item">
              <h3>Business Operations</h3>
              <p>Keep your practice running smoothly with ongoing support for day-to-day operations.</p>
            </div>
            <div className="benefit-item">
              <h3>Financial Planning</h3>
              <p>Personal and business financial planning to make sure that your practice is profitable.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to simplify your practice management?</h2>
            <p>Schedule a free 30-minute call to discuss your business coaching and operational support needs.</p>
            <a href="https://calendar.app.google/eKw5VvbdXUPmLa5Q8" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Schedule Your Free Call</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

