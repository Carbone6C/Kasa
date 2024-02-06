import './_layout.scss'
import PropTypes from 'prop-types'

function Layout({ text }) {
  return <p className="layout__title">{text}</p>
}

Layout.propTypes = {
  text: PropTypes.string.isRequired,
}
export default Layout
