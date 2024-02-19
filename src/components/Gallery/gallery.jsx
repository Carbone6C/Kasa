import { Link } from 'react-router-dom'
import './_gallery.scss'
import { useEffect, useState } from 'react'
import { getData } from '../../utilis/getData.js'

function Gallery() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData()
        setData(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  // Rendu du composant Gallery
  return (
    <div className="gallery">
      {data.map((apartment, index) => (
        <Link
          to={`/apartment/${apartment.id}/info`}
          className="gallery__link"
          key={`${apartment.id}-${index}`}
        >
          <img
            src={apartment.cover}
            alt={apartment.title}
            className="gallery__cover-img"
          />
          <h2 className="gallery__apartment__title">{apartment.title}</h2>
        </Link>
      ))}
    </div>
  )
}

export default Gallery
