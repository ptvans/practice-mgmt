import { Link } from 'react-router-dom'

function StartingPractice() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Starting a Practice</h1>
          <p>Your roadmap from therapist to practice owner</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-card" style={{ marginBottom: '3rem' }}>
            <h2>Starting a private practice can feel overwhelming</h2>
            <p>You went to school to be a therapist, not a business owner. But here you are, ready to take the leap into private practice. The good news? You don't have to figure it all out alone.</p>
            <p>I'll walk you through every step of the process, from business formation to seeing your first client.</p>
          </div>

          <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>The Process</h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-number">1</div>
              <div className="timeline-content">
                <h3>Foundation</h3>
                <p>Business structure (LLC vs. sole proprietorship), EIN registration, business bank account, and basic legal compliance.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">2</div>
              <div className="timeline-content">
                <h3>Infrastructure</h3>
                <p>Choose and set up your EMR, scheduling system, payment processing, and communication tools. I'll help you navigate SimplePractice, TherapyNotes, or other platforms.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">3</div>
              <div className="timeline-content">
                <h3>Administrative Setup</h3>
                <p>Intake forms, informed consent, HIPAA compliance, privacy policies, and all the paperwork that protects you and your clients.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">4</div>
              <div className="timeline-content">
                <h3>Insurance & Billing</h3>
                <p>Decide on your payment model (insurance, private pay, or both), get credentialed if needed, and set up billing systems.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">5</div>
              <div className="timeline-content">
                <h3>Launch</h3>
                <p>Create your online presence, set up referral channels, and prepare to welcome your first clients.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">6</div>
              <div className="timeline-content">
                <h3>Ongoing Support</h3>
                <p>As you grow, I'm here to help you optimize, troubleshoot, and scale your practice sustainably.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="complexity-section">
        <div className="container">
          <div className="content-card">
            <h2>Timeline: 4-8 Weeks from Start to First Client</h2>
            <p>Most therapists can be fully set up and ready to see clients within 4-8 weeks. The timeline depends on factors like insurance credentialing (which can take 60-90 days) and how quickly you can dedicate time to setup.</p>
            <p>If you're starting with private pay only, you can often see your first client within 2-4 weeks.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to start your practice?</h2>
            <p>Let's create a personalized roadmap for launching your private practice.</p>
            <Link to="/chat" className="btn btn-primary">Let's Talk</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default StartingPractice

