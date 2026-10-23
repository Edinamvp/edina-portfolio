import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import '../styles/Contact.css'

const CONTACT_EMAIL = 'iljaziedina@gmail.com'

export default function Contact() {
  const revealRef = useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  // There's no backend here, so "sending" the form opens the visitor's own
  // email client with everything pre-filled via a mailto: link. Nothing is
  // stored or transmitted by this site itself.
  function handleSubmit(e) {
    e.preventDefault()

    const subject = encodeURIComponent(`Hello from ${form.name || 'your website'}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    )

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section section--contrast contact">
      <div className="container contact__grid">
        <div ref={revealRef} className="reveal contact__intro">
          <p className="eyebrow">Let's make something</p>
          <h2 className="section-heading contact__heading">
           Have a project in mind?
          </h2>
          <p className="section-lede contact__lede">
            I'm always open to interesting ideas, 
            freelance projects, collaborations, 
            or just a good conversation about 
            something you're building.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="contact__direct-link"
          >
            Send an email <span aria-hidden="true">→</span>
          </a>
        </div>

        <form className="contact__letter" onSubmit={handleSubmit}>
          <div className="contact__field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </div>

          <div className="contact__field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="edinailjazi@icloud.com"
            />
          </div>

          <div className="contact__field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="What are you thinking of building?"
            />
          </div>

          <button type="submit" className="contact__submit">
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}
