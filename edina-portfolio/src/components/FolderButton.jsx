import '../styles/FolderButton.css'

/**
 * A contact CTA shaped like a small manila folder rather than a plain
 * rectangular button. On hover it lifts, tilts slightly, and the front
 * flap eases open to reveal a "peek" strip underneath.
 */
export default function FolderButton({ href = '#contact', label = 'Contact me' }) {
  return (
    <a href={href} className="folder-btn" aria-label={label}>
      <span className="folder-btn__back" aria-hidden="true">
        <span className="folder-btn__tab" />
      </span>
      <span className="folder-btn__peek" aria-hidden="true">
        say hello
      </span>
      <span className="folder-btn__front">
        <span className="folder-btn__label">{label}</span>
        <svg
          className="folder-btn__arrow"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          aria-hidden="true"
        >
          <path
            d="M5 12h13M13 6l6 6-6 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  )
}
