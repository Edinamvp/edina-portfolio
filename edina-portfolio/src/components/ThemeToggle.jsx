import '../styles/ThemeToggle.css'


export default function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark'

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="theme-toggle__track">
        <span className="theme-toggle__thumb">
          {isDark ? (
            <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
              <path
                fill="currentColor"
                d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a.6.6 0 0 0-.78-.7A9 9 0 1 0 21.2 15.3a.6.6 0 0 0-.7-.8Z"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
              <circle cx="12" cy="12" r="4.6" fill="currentColor" />
              <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <line x1="12" y1="1.5" x2="12" y2="4" />
                <line x1="12" y1="20" x2="12" y2="22.5" />
                <line x1="1.5" y1="12" x2="4" y2="12" />
                <line x1="20" y1="12" x2="22.5" y2="12" />
                <line x1="4.5" y1="4.5" x2="6.2" y2="6.2" />
                <line x1="17.8" y1="17.8" x2="19.5" y2="19.5" />
                <line x1="19.5" y1="4.5" x2="17.8" y2="6.2" />
                <line x1="6.2" y1="17.8" x2="4.5" y2="19.5" />
              </g>
            </svg>
          )}
        </span>
      </span>
    </button>
  )
}
