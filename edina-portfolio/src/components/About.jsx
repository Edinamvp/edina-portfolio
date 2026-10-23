import { useScrollReveal } from '../hooks/useScrollReveal.js'
import '../styles/About.css'

export default function About() {
  const headingRef = useScrollReveal()
  const bodyRef = useScrollReveal()

  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div ref={headingRef} className="reveal about__heading-col">
          <p className="eyebrow">A little about me</p>
          <h2 className="section-heading">Behind the code</h2>
        </div>

        <div ref={bodyRef} className="reveal reveal-delay-1 about__body-col">
          <p className="about__paragraph">
            I&apos;m Edina, a curious coder who enjoys turning little ideas
            into things you can actually click, use and play with. I like
            solving the messy little puzzles behind a website just as much as
            making the final result look good.
          </p>

          <p className="about__paragraph">
            I&apos;m currently growing my skills across front-end and
            back-end development, building projects, learning constantly, and
            occasionally wondering why my code worked five minutes ago.
          </p>
        </div>
      </div>
    </section>
  )
}