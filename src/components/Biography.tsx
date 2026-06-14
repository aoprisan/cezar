import { biography, profile } from '../data/content.ts'
import { useReveal } from '../lib/useReveal.ts'

export default function Biography() {
  const { ref, shown } = useReveal<HTMLElement>()
  const [first, ...rest] = biography.paragraphs

  return (
    <section
      id="biografie"
      ref={ref}
      className={`section section--bio reveal ${shown ? 'is-shown' : ''}`}
      aria-labelledby="bio-heading"
    >
      <div className="section__head">
        <p className="section__index mono-label">01 — Viața</p>
        <h2 id="bio-heading" className="section__title">
          {biography.heading}
        </h2>
      </div>

      <div className="bio__body">
        <aside className="bio__meta">
          <dl>
            <div className="bio__meta-row">
              <dt className="mono-label">Născut</dt>
              <dd>{profile.born}</dd>
            </div>
            <div className="bio__meta-row">
              <dt className="mono-label">Trecut în neființă</dt>
              <dd>{profile.died}</dd>
            </div>
          </dl>
        </aside>

        <div className="bio__prose">
          <p className="bio__lead">
            <span className="bio__drop">{first.charAt(0)}</span>
            {first.slice(1)}
          </p>
          {rest.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
