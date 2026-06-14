import { footer, profile } from '../data/content.ts'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__remembrance">{footer.remembrance}</p>

        <div className="footer__cols">
          <div className="footer__colophon">
            <p className="mono-label">{profile.honorific}</p>
            <p className="footer__name">{profile.name}</p>
            <p className="footer__lifespan mono-label">{profile.lifespan}</p>
          </div>

          <nav className="footer__sources" aria-label={footer.sourcesHeading}>
            <h2 className="footer__sources-heading mono-label">{footer.sourcesHeading}</h2>
            <ul>
              {footer.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noopener noreferrer">
                    {source.label}
                    <span className="footer__arrow" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="footer__sign mono-label">
          Memento · {profile.born.split(',')[0].trim()}
        </p>
      </div>
    </footer>
  )
}
