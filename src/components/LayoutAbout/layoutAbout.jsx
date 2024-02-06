import './_layoutAbout.scss'
import PropTypes from 'prop-types'

function LayoutAbout({ text }) {
  return <p className="layoutAbout__title">{text}</p>
}

LayoutAbout.propTypes = {
  text: PropTypes.string,
}
export default LayoutAbout
