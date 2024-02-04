import { Link } from 'react-router-dom'
import './_gallery.scss'
import data from '../../data/data.json'

function Gallery() {
  return (
    <div className="gallery">
      {data.map((data, index) => (
        <Link
          to={`/Apartment/${data.id}/info`}
          className="gallery__link"
          key={`${data.id}-${index}`}
        >
          <img
            src={data.cover}
            alt={data.title}
            className="gallery__cover-img"
          />
          <h2 className="gallery__apartment__title">{data.title}</h2>
        </Link>
      ))}
    </div>
  )
}

export default Gallery
