import { biography, profile } from '../data/content.ts'

export default function Biography() {
  return (
    <section className="section section--bio" id="biografie">
      <div className="container">
        <h2 className="section__heading">{biography.heading}</h2>
        <p className="section__dates">
          <span>{profile.born}</span>
          <span className="section__dates-sep" aria-hidden="true">
            —
          </span>
          <span>{profile.died}</span>
        </p>
        <div className="prose">
          {biography.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
