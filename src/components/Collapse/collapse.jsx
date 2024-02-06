import { useState } from 'react'
import PropTypes from 'prop-types'
import './_collapse.scss'
import downArrow from '../../assets/downArrow.png'
import upArrow from '../../assets/upArrow.png'

function Collapse({ title, text }) {
  // Utilisation de l'état local pour suivre l'état ouvert/fermé du Collapse
  const [isClosed, setIsClosed] = useState(true)

  // Fonction de gestion du basculement entre ouvert et fermé
  const handleToggle = () => {
    setIsClosed(!isClosed)
  }

  // Fonction pour rendre le texte en fonction de son type (string ou array)
  const renderText = () => {
    if (Array.isArray(text)) {
      // Si le texte est un tableau, affiche une liste
      return (
        <ul
          className={`collapse__list ${
            isClosed ? 'collapse--closed__list' : 'collapse--open__list'
          }`}
        >
          {text.map((item, index) => (
            <li key={index} className="collapse__list-item">
              {item}
            </li>
          ))}
        </ul>
      )
    } else {
      // Si le texte est une chaîne de caractères, affiche un paragraphe
      return (
        <p
          className={`collapse__text ${
            isClosed ? 'collapse--closed__text' : 'collapse--open__text'
          }`}
        >
          {text}
        </p>
      )
    }
  }

  // Rendu du composant Collapse
  return (
    <div
      className={`collapse ${isClosed ? 'collapse--closed' : 'collapse--open'}`}
    >
      <div className="collapse__container">
        <h1 className="collapse__title">{title}</h1>
        <img
          src={isClosed ? downArrow : upArrow}
          alt={isClosed ? 'Down Arrow' : 'Up Arrow'}
          className="collapse__toggle-button"
          onClick={handleToggle}
        />
      </div>
      {renderText()}
    </div>
  )
}

// Définition des propTypes attendus des propriétés
Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
}

export default Collapse
