import './_card.scss'
import PropTypes from 'prop-types'
import filledStar from '../../assets/FilledStar.png'
import emptyStar from '../../assets/EmptyStar.png'

function Card({ title, location, tags, host, rating }) {
  // Fonction pour générer les étoiles en fonction de la note
  const renderStars = () => {
    const ratingValue = parseInt(rating)
    const stars = []

    // Boucle pour créer les étoiles
    for (let i = 0; i < 5; i++) {
      // Vérifie si l'index est inférieur à la valeur de la note pour afficher une étoile remplie
      if (i < ratingValue) {
        stars.push(
          <img
            key={i}
            src={filledStar}
            alt="Filled Star"
            className="card__rating-star"
          />
        )
      } else {
        // Sinon, affiche une étoile vide
        stars.push(
          <img
            key={i}
            src={emptyStar}
            alt="Empty Star"
            className="card__rating-star"
          />
        )
      }
    }

    return stars
  }

  // Rendu du composant Card
  return (
    <div className="card">
      <div className="card__content">
        <h1 className="card__content-title">{title}</h1>
        <p className="card__content-location">{location}</p>
        <ul className="card__content-tags">
          {tags.map((tag, index) => (
            <li key={index} className="card__content-tag">
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="card__host">
        <div className="card__host-details">
          <span className="card__host-name">{host.name}</span>
          <img
            className="card__host-picture"
            src={host.picture}
            alt={`Photo de : ${host.name}`}
          />
        </div>
        <div className="card__rating">{renderStars()}</div>
      </div>
    </div>
  )
}

// Définition des propTypes attendus des propriétés
Card.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  cover: PropTypes.string,
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
  rating: PropTypes.string.isRequired,
  description: PropTypes.string,
  equipments: PropTypes.arrayOf(PropTypes.string),
}

export default Card
