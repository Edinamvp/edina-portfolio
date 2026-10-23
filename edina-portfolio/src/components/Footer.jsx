import '../styles/Footer.css'

const CONTACT_EMAIL = 'iljaziedina@gmail.com'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__tagline">Edina — building things for the web.</p>

        <ul className="footer__links">
          <li>
            <a 
              href="https://github.com/Edinamvp" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              GitHub
            </a>
          </li>
          <li>
            <a 
              href="https://www.linkedin.com/in/edina-iljazi-045b1243b/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </a>
          </li>
         <li>
            <a 
              href={`mailto:${CONTACT_EMAIL}`} 
              aria-label="Send email to Edina"
              >
              Email
            </a>
         </li>
        </ul>

        <p className="footer__copyright">© {year} Edina</p>
      </div>
    </footer>
  )
}