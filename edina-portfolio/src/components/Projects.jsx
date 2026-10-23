import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import '../styles/Projects.css'

export default function Projects() {
  const headingRef = useScrollReveal()
  const cardsRef = useScrollReveal()
  const moreRef = useScrollReveal()

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div ref={headingRef} className="reveal projects__heading">
          <p className="eyebrow">From idea to browser</p>
          <h2 className="section-heading">Things I have built</h2>
        </div>

        <div ref={cardsRef} className="reveal reveal-delay-1 projects__list">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Clearly-marked placeholder so the section reads as "growing",
            not empty. Remove this block once a second real project exists. */}
        <div ref={moreRef} className="reveal reveal-delay-2 projects__more">
          <p className="projects__more-label">More projects, coming soon</p>
          <p className="projects__more-text">
            I&apos;m building the next one right now — check back soon.
          </p>
        </div>
      </div>
    </section>
  )
}
