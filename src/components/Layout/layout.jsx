import './_layout.scss'
import PropTypes from 'prop-types'

function Layout({ text }) {
  // Rendu du composant Layout
  return <p className="layout__title">{text}</p>
}

// Définition des propTypes attendus des propriétés
Layout.propTypes = {
  text: PropTypes.string.isRequired,
}
export default Layout
