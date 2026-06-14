import { footer, profile } from '../data/content.ts'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__remembrance">{footer.remembrance}</p>

        <div className="footer__sources">
          <h2 className="footer__sources-heading">{footer.sourcesHeading}</h2>
          <ul>
            {footer.sources.map((source) => (
              <li key={source.url}>
                <a href={source.url} target="_blank" rel="noopener noreferrer">
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="footer__name">
          {profile.honorific} {profile.name} · {profile.lifespan}
        </p>
      </div>
    </footer>
  )
}
