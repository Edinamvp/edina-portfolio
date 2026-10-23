import { useScrollReveal } from '../hooks/useScrollReveal.js'
import FolderButton from './FolderButton.jsx'
import '../styles/Hero.css'

export default function Hero() {
  const revealRef = useScrollReveal()

  return (
    <section id="hero" className="hero">
      <div className="container hero__inner">
        <div ref={revealRef} className="reveal hero__content">
          <h1 className="hero__title">
            Hi there, I&apos;m Edina.
            <br />
            <em>I build things for the web.</em>
          </h1>

          <p className="hero__sub">
            I build thoughtful, responsive web experiences with a focus on
            clean code, intuitive design, and turning ideas into functional
            products.
          </p>

          <div className="hero__cta">
            <FolderButton href="#contact" label="Contact me" />
          </div>
        </div>
      </div>
    </section>
  )
}