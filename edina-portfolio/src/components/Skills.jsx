import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { skills } from '../data/skills.js'
import '../styles/Skills.css'

// Small child component so useScrollReveal is called once per pill,
// at the top level of its own component — never inside a loop.
function SkillPill({ skill, delay }) {
  const ref = useScrollReveal()
  return (
    <li ref={ref} className={`skills__pill reveal reveal-delay-${delay}`}>
      {skill}
    </li>
  )
}

export default function Skills() {
  const revealRef = useScrollReveal()

  return (
    <section id="skills" className="section section--soft skills">
      <div className="container">
        <div ref={revealRef} className="reveal skills__heading">
          <p className="eyebrow">My toolbox</p>
          <h2 className="section-heading">Things I speak</h2>
          <p className="section-lede">
            Programming languages are basically another language — here are
            the ones I&apos;m currently fluent in.
          </p>
        </div>

        <ul className="skills__list">
          {skills.map((skill, i) => (
            <SkillPill key={skill} skill={skill} delay={Math.min((i % 4) + 1, 4)} />
          ))}
        </ul>
      </div>
    </section>
  )
}
