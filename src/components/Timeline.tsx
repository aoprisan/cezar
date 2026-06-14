import { careerHeading, timeline } from '../data/content.ts'

export default function Timeline() {
  return (
    <section className="section section--timeline" id="cariera">
      <div className="container">
        <h2 className="section__heading">{careerHeading}</h2>
        <ol className="timeline">
          {timeline.map((entry, i) => (
            <li className="timeline__item" key={i}>
              <span className="timeline__period">{entry.period}</span>
              <div className="timeline__body">
                <h3 className="timeline__role">{entry.role}</h3>
                <p className="timeline__detail">{entry.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
