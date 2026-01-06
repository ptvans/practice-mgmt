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
              <Link to="/chat" className="btn btn-primary">Get Started</Link>
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
              <p>From LLC formation to EIN registration, I'll guide you through every step of establishing your practice.</p>
            </div>
            <div className="benefit-item">
              <h3>Billing & Insurance</h3>
              <p>Navigate the complexity of insurance panels, billing, and claims so you get paid on time.</p>
            </div>
            <div className="benefit-item">
              <h3>Platform Management</h3>
              <p>I'll help you choose and set up the right tools, from EMR systems to scheduling platforms.</p>
            </div>
            <div className="benefit-item">
              <h3>Business Operations</h3>
              <p>Keep your practice running smoothly with ongoing support for day-to-day operations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to simplify your practice management?</h2>
            <p>Let's chat about how I can help you focus on what you do best — helping your clients.</p>
            <Link to="/chat" className="btn btn-primary">Chat with Me</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

