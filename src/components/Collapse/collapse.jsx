import { useState } from 'react'
import PropTypes from 'prop-types'
import './_collapse.scss'
import downArrow from '../../assets/downArrow.png'
import upArrow from '../../assets/upArrow.png'

function Collapse({ title, text }) {
  const [isClosed, setIsClosed] = useState(true)

  const renderText = () => {
    if (Array.isArray(text)) {
      return (
        <ul className="collapse__list">
          {text.map((item, index) => (
            <li key={index} className="collapse__list-item">
              {item}
            </li>
          ))}
        </ul>
      )
    } else {
      return <p className="collapse__text">{text}</p>
    }
  }

  return isClosed ? (
    <div className="collapse collapse--closed">
      <div className="collapse__container">
        <h1 className="collapse__title">{title}</h1>
        <img
          src={downArrow}
          alt="Down Arrow"
          className="collapse__toggle-button"
          onClick={() => setIsClosed(false)}
        />
      </div>
    </div>
  ) : (
    <div className="collapse">
      <div className="collapse__container">
        <h1 className="collapse__title">{title}</h1>
        <img
          src={upArrow}
          alt="Up Arrow"
          className="collapse__toggle-button"
          onClick={() => setIsClosed(true)}
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
