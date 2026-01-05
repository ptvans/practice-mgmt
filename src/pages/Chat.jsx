import { useState } from 'react'

function Chat() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practiceStage: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Here you would typically send this to a backend API
    console.log('Form submitted:', formData)
    
    // Show success message
    setFormSubmitted(true)
    
    // In a real implementation, you would:
    // fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    // })
  }

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
                    <p>thom@practicemanager.com</p>
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

            <div className="contact-form-wrapper">
              {!formSubmitted ? (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="practiceStage">Where are you in your practice journey? *</label>
                    <select 
                      id="practiceStage" 
                      name="practiceStage" 
                      value={formData.practiceStage}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select one...</option>
                      <option value="planning">Planning to start a practice</option>
                      <option value="just-started">Just started (0-6 months)</option>
                      <option value="growing">Growing practice (6mo-2yrs)</option>
                      <option value="established">Established practice (2+ years)</option>
                      <option value="transitioning">Transitioning from group to private</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Tell me about your practice and what you need help with *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="6" 
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              ) : (
                <div className="form-success">
                  <h3>Thank you for reaching out!</h3>
                  <p>I've received your message and will get back to you within 24 hours.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="complexity-section">
        <div className="container">
          <div className="content-card">
            <h2>What Happens Next?</h2>
            <p>After you reach out, I'll review your message and get back to you within 24 hours. We'll schedule a free consultation call to discuss your practice needs in detail and see if we're a good fit to work together.</p>
            <p>No pressure, no sales tactics — just an honest conversation about your practice and how I might be able to help.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Chat

