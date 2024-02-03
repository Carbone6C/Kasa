import { Link } from 'react-router-dom'
import './_gallery.scss'

function Gallery() {
  return (
    <div className="gallery">
      <Link to="/Apartment" className="gallery__link"></Link>
      <Link to="/Apartment" className="gallery__link"></Link>
      <Link to="/Apartment" className="gallery__link"></Link>
      <Link to="/Apartment" className="gallery__link"></Link>
      <Link to="/Apartment" className="gallery__link"></Link>
      <Link to="/Apartment" className="gallery__link"></Link>
    </div>
  )
}
export default Gallery
