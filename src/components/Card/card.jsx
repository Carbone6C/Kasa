import './_card.scss'
import PropTypes from 'prop-types'
import filledStar from '../../assets/FilledStar.png'
import emptyStar from '../../assets/EmptyStar.png'

function Card({ title, location, tags, host, rating }) {
  const renderStars = () => {
    const ratingValue = parseInt(rating)
    const stars = []

    for (let i = 0; i < 5; i++) {
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
