import { useState } from 'react'
import { profile, hero } from '../data/content.ts'
import Linkage from './Linkage.tsx'

export default function Hero() {
  const [imgFailed, setImgFailed] = useState(false)
  const portraitSrc = import.meta.env.BASE_URL + profile.portrait
  const initials = profile.name
    .split(' ')
    .map((part) => part[0])
    .join('')

  const [birthYear, deathYear] = profile.lifespan.split('–').map((s) => s.trim())

  return (
    <header className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <Linkage className="hero__motif" />

      <div className="hero__inner">
        <div className="hero__text">
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-tick" />
            In memoriam
          </p>

          <p className="hero__honorific">{profile.honorific}</p>
          <h1 className="hero__name">
            <span className="hero__name-line">Cezar</span>
            <span className="hero__name-line">Oprișan</span>
          </h1>

          <div className="hero__dates" aria-label={`Anii vieții: ${profile.lifespan}`}>
            <span className="hero__year">{birthYear}</span>
            <span className="hero__rule" />
            <span className="hero__year">{deathYear}</span>
          </div>

          <div className="hero__roles">
            <p>{profile.role}</p>
            <p className="hero__subrole">{profile.subRole}</p>
          </div>

          <p className="hero__epitaph">{hero.epitaph}</p>
        </div>

        <figure className="hero__plate">
          <div className="hero__portrait">
            {imgFailed ? (
              <div className="hero__portrait-fallback" aria-hidden="true">
                {initials}
              </div>
            ) : (
              <img
                src={portraitSrc}
                alt={`Portret — ${profile.honorific} ${profile.name}`}
                onError={() => setImgFailed(true)}
                loading="eager"
              />
            )}
            <span className="hero__plate-corner hero__plate-corner--tl" />
            <span className="hero__plate-corner hero__plate-corner--br" />
          </div>
          <figcaption className="hero__plate-caption">
            <span className="mono-label">Pl. I</span>
            <span>Portret</span>
          </figcaption>
        </figure>
      </div>

      <a className="hero__scroll" href="#biografie" aria-label="Coboară la biografie">
        <span className="mono-label">vezi mai jos</span>
        <span className="hero__scroll-line" />
      </a>
    </header>
  )
}
