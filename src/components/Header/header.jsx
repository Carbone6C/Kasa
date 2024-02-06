import { Link } from 'react-router-dom'
import logoKasa from '../../assets/LOGO.png'
import './_header.scss'

function Header() {
  // Rendu du composant Header
  return (
    <header className="header">
      <Link to="/" className="header__logo-link">
        <img className="header__logo" src={logoKasa} alt="image du logo Kasa" />
      </Link>
      <nav className="header__navigation">
        <Link to="/" className="header__nav-link">
          Accueil
        </Link>
        <Link to="/About" className="header__nav-link">
          A Propos
        </Link>
      </nav>
    </header>
  )
}
export default Header
