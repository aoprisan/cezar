import type { CSSProperties } from 'react'
import { careerHeading, timeline } from '../data/content.ts'
import { useReveal } from '../lib/useReveal.ts'

export default function Timeline() {
  const { ref, shown } = useReveal<HTMLElement>()

  return (
    <section
      id="cariera"
      ref={ref}
      className={`section section--timeline reveal ${shown ? 'is-shown' : ''}`}
      aria-labelledby="timeline-heading"
    >
      <div className="section__head">
        <p className="section__index mono-label">02 — Parcurs</p>
        <h2 id="timeline-heading" className="section__title">
          {careerHeading}
        </h2>
      </div>

      <ol className="timeline">
        {timeline.map((entry, i) => (
          <li
            className="timeline__item"
            key={i}
            style={{ '--i': i } as CSSProperties}
          >
            <span className="timeline__axis" aria-hidden="true">
              <span className="timeline__node" />
            </span>
            <span className="timeline__period mono-label">{entry.period}</span>
            <div className="timeline__body">
              <h3 className="timeline__role">{entry.role}</h3>
              <p className="timeline__detail">{entry.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
