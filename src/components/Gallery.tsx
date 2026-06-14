import { gallerySection } from '../data/content.ts'

export default function Gallery() {
  const base = import.meta.env.BASE_URL

  return (
    <section className="section section--gallery" id="galerie">
      <div className="container">
        <h2 className="section__heading">{gallerySection.heading}</h2>
        <p className="section__intro">{gallerySection.intro}</p>

        <ul className="gallery">
          {gallerySection.items.map((item) => (
            <li className="gallery__item" key={item.src}>
              <figure className="gallery__figure">
                <img
                  className="gallery__img"
                  src={base + item.src}
                  alt={item.caption}
                  loading="lazy"
                />
                <figcaption className="gallery__caption">{item.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
