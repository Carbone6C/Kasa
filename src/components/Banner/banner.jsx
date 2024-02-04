import { useParams } from 'react-router-dom'
import { useState } from 'react'
import rightarrow from '../../assets/right_arrow.png'
import leftarrow from '../../assets/left_arrow.png'
import './_banner.scss'
import data from '../../data/data.json'

function Banner() {
  const { id } = useParams()
  const selectedApartment = data.find(
    (apartment) => apartment.id.toString() === id
  )
  const [pos, setPos] = useState(0)

  const updateCarrousel = (position) => {
    setPos(position)
  }

  const handleArrowLeftClick = () => {
    const newPosition =
      pos === 0 ? selectedApartment.pictures.length - 1 : pos - 1
    updateCarrousel(newPosition)
  }

  const handleArrowRightClick = () => {
    const newPosition =
      pos === selectedApartment.pictures.length - 1 ? 0 : pos + 1
    updateCarrousel(newPosition)
  }

  return (
    <div className="banner">
      <img
        className="banner__img"
        src={selectedApartment.pictures[pos]}
        alt="Banner Print-it"
      ></img>
      <img
        src={leftarrow}
        className="banner__arrow banner__arrow--left"
        onClick={handleArrowLeftClick}
      />
      <img
        src={rightarrow}
        className="banner__arrow banner__arrow--right"
        onClick={handleArrowRightClick}
      />
      {
        <div className="banner__indicator">{`${pos + 1}/${
          selectedApartment.pictures.length
        }`}</div>
      }
    </div>
  )
}

export default Banner
