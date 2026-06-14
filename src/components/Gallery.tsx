import { gallerySection } from '../data/content.ts'
import { useReveal } from '../lib/useReveal.ts'

export default function Gallery() {
  const base = import.meta.env.BASE_URL
  const { ref, shown } = useReveal<HTMLElement>()

  return (
    <section
      id="galerie"
      ref={ref}
      className={`section section--gallery reveal ${shown ? 'is-shown' : ''}`}
      aria-labelledby="gallery-heading"
    >
      <div className="section__head">
        <p className="section__index mono-label">04 — Chipuri</p>
        <h2 id="gallery-heading" className="section__title">
          {gallerySection.heading}
        </h2>
      </div>

      <p className="research__intro">{gallerySection.intro}</p>

      <ul className="gallery">
        {gallerySection.items.map((item, i) => (
          <li className="gallery__item" key={item.src}>
            <figure className="gallery__figure">
              <div className="gallery__frame">
                <img
                  className="gallery__img"
                  src={base + item.src}
                  alt={item.caption}
                  loading="lazy"
                />
              </div>
              <figcaption className="gallery__caption">
                <span className="mono-label">{`Fig. ${i + 1}`}</span>
                <span>{item.caption}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}
