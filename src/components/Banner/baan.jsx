import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import rightarrow from '../../assets/right_arrow.png'
import leftarrow from '../../assets/left_arrow.png'
import './_banner.scss'
import { getData } from '../../utilis/getData.js'

function Banner() {
  // Extraction du paramètre 'id' de l'URL à l'aide de 'useParams'
  const { id } = useParams()

  // Initialisation de l'état local pour stocker les données de l'appartement sélectionné
  const [selectedApartment, setSelectedApartment] = useState(null)

  // Initialisation de l'état pour la position actuelle dans le carrousel
  const [pos, setPos] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData()
        const apartment = data.find(
          (apartment) => apartment.id.toString() === id
        )
        setSelectedApartment(apartment)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [id])

  if (!selectedApartment) {
    return null
  }
  // Fonction pour mettre à jour la position du carrousel
  const updateCarousel = (position) => {
    setPos(position)
  }

  // Gestion du clic sur la flèche gauche du carrousel
  const handleArrowLeftClick = () => {
    const newPosition =
      pos === 0 ? selectedApartment.pictures.length - 1 : pos - 1
    updateCarousel(newPosition)
  }

  // Gestion du clic sur la flèche gauche du carrousel
  const handleArrowRightClick = () => {
    const newPosition =
      pos === selectedApartment.pictures.length - 1 ? 0 : pos + 1
    updateCarousel(newPosition)
  }

  // Rendu du composant Banner
  return (
    <div className="banner">
      {/* Affichage de l'image en fonction de la position actuelle dans le carrousel */}
      <img
        className="banner__img"
        src={selectedApartment.pictures[pos]}
        alt={`Photo de l'appartement de ${selectedApartment.host.name} numéro ${
          pos + 1
        }`}
      ></img>

      {/* Flèche gauche du carrousel avec gestion du clic */}
      {selectedApartment.pictures.length > 1 && (
        <img
          src={leftarrow}
          className="banner__arrow banner__arrow--left"
          onClick={handleArrowLeftClick}
        />
      )}

      {/* Flèche droite du carrousel avec gestion du clic */}
      {selectedApartment.pictures.length > 1 && (
        <img
          src={rightarrow}
          className="banner__arrow banner__arrow--right"
          onClick={handleArrowRightClick}
        />
      )}

      {/* Affichage de l'indicateur de position dans le carrousel */}
      {selectedApartment.pictures.length > 1 && (
        <div className="banner__indicator">{`${pos + 1}/${
          selectedApartment.pictures.length
        }`}</div>
      )}
    </div>
  )
}

export default Banner
