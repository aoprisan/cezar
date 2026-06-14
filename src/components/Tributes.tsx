import type { CSSProperties } from 'react'
import { tributesSection } from '../data/content.ts'
import { useReveal } from '../lib/useReveal.ts'

export default function Tributes() {
  const { ref, shown } = useReveal<HTMLElement>()

  return (
    <section
      id="marturii"
      ref={ref}
      className={`section section--tributes reveal ${shown ? 'is-shown' : ''}`}
      aria-labelledby="tributes-heading"
    >
      <div className="section__head">
        <p className="section__index mono-label">05 — Mărturii</p>
        <h2 id="tributes-heading" className="section__title">
          {tributesSection.heading}
        </h2>
      </div>

      <div className="tributes">
        {tributesSection.tributes.map((tribute, i) => (
          <figure
            className="tribute"
            key={i}
            style={{ '--i': i } as CSSProperties}
          >
            <span className="tribute__mark" aria-hidden="true">
              „
            </span>
            <blockquote className="tribute__quote">{tribute.quote}</blockquote>
            <figcaption className="tribute__source">{tribute.source}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
