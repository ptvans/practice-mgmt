function Chat() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Let's Chat</h1>
          <p>Tell me about your practice and how I can help</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="contact-container">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>I'd love to hear about your practice and discuss how I can support you. Whether you're just starting out or looking to streamline an established practice, let's explore what's possible.</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div>
                    <h3>Email</h3>
                    <p>hello@gethelena.com</p>
                  </div>
                </div>
                <div className="contact-method">
                  <div>
                    <h3>Schedule a Call</h3>
                    <p>Book a free 30-minute consultation</p>
                  </div>
                </div>
                <div className="contact-method">
                  <div>
                    <h3>Response Time</h3>
                    <p>I typically respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="schedule-cta-wrapper">
              <div className="schedule-cta-content">
                <h3>Book Your Free Consultation</h3>
                <p>Schedule a free 30-minute call to discuss business coaching and operational support for your therapy practice.</p>
                <p>We'll talk about where you are in your practice journey and explore how I can help you succeed.</p>
                <a 
                  href="https://calendar.app.google/eKw5VvbdXUPmLa5Q8" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  Schedule Free 30-Min Call
                </a>
                <p className="schedule-note">No pressure, no sales tactics — just an honest conversation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="complexity-section">
        <div className="container">
          <div className="content-card">
            <h2>What Happens on Our Call?</h2>
            <p>During our free 30-minute consultation, we'll discuss your practice goals, current challenges, and how business coaching and operational support can help you focus on what matters most — your clients.</p>
            <p>No pressure, no sales tactics — just an honest conversation about your practice and how I might be able to help.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Chat
