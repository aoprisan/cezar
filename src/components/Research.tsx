import { research } from '../data/content.ts'

export default function Research() {
  return (
    <section className="section section--research" id="cercetare">
      <div className="container">
        <h2 className="section__heading">{research.heading}</h2>
        <p className="section__intro">{research.intro}</p>

        <ul className="fields">
          {research.fields.map((field) => (
            <li className="fields__item" key={field}>
              {field}
            </li>
          ))}
        </ul>

        <div className="stats">
          {research.stats.map((stat, i) => (
            <div className="stats__item" key={i}>
              <span className="stats__value">{stat.value}</span>
              <span className="stats__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
