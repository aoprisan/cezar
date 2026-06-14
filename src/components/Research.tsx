import type { CSSProperties } from 'react'
import { research } from '../data/content.ts'
import { useReveal } from '../lib/useReveal.ts'

export default function Research() {
  const { ref, shown } = useReveal<HTMLElement>()

  return (
    <section
      id="cercetare"
      ref={ref}
      className={`section section--research reveal ${shown ? 'is-shown' : ''}`}
      aria-labelledby="research-heading"
    >
      <div className="section__head">
        <p className="section__index mono-label">03 — Operă</p>
        <h2 id="research-heading" className="section__title">
          {research.heading}
        </h2>
      </div>

      <p className="research__intro">{research.intro}</p>

      <ul className="fields">
        {research.fields.map((field) => (
          <li className="fields__item mono-label" key={field}>
            {field}
          </li>
        ))}
      </ul>

      <dl className="stats">
        {research.stats.map((stat, i) => (
          <div
            className="stats__item"
            key={i}
            style={{ '--i': i } as CSSProperties}
          >
            <dt className="stats__value">{stat.value}</dt>
            <dd className="stats__label">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
