import { tributesSection } from '../data/content.ts'

export default function Tributes() {
  return (
    <section className="section section--tributes" id="marturii">
      <div className="container">
        <h2 className="section__heading">{tributesSection.heading}</h2>
        <div className="tributes">
          {tributesSection.tributes.map((tribute, i) => (
            <figure className="tribute" key={i}>
              <blockquote className="tribute__quote">{tribute.quote}</blockquote>
              <figcaption className="tribute__source">— {tribute.source}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
