import './_layoutAbout.scss'
import PropTypes from 'prop-types'

function LayoutAbout({ text }) {
  // Rendu du composant LayoutAbout
  return <p className="layoutAbout__title">{text}</p>
}

// Définition des propTypes attendus des propriétés
LayoutAbout.propTypes = {
  text: PropTypes.string,
}
export default LayoutAbout
