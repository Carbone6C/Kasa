import { useState } from 'react'
import PropTypes from 'prop-types'
import './_collapse.scss'
import downArrow from '../../assets/downArrow.png'
import upArrow from '../../assets/upArrow.png'

function Collapse({ title, text }) {
  const [isClosed, setIsClosed] = useState(true)

  const handleToggle = () => {
    setIsClosed(!isClosed)
  }

  const renderText = () => {
    if (Array.isArray(text)) {
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

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
}

export default Collapse
