import { useState } from 'react'
import { profile, hero } from '../data/content.ts'

export default function Hero() {
  const [imgFailed, setImgFailed] = useState(false)
  const portraitSrc = import.meta.env.BASE_URL + profile.portrait
  const initials = profile.name
    .split(' ')
    .map((part) => part[0])
    .join('')

  return (
    <header className="hero">
      <div className="hero__inner">
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
            />
          )}
        </div>

        <p className="hero__honorific">{profile.honorific}</p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__lifespan">{profile.lifespan}</p>

        <div className="hero__roles">
          <p>{profile.role}</p>
          <p className="hero__subrole">{profile.subRole}</p>
        </div>

        <p className="hero__epitaph">{hero.epitaph}</p>
      </div>
    </header>
  )
}
