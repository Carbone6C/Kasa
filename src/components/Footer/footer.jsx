import darkLogoKasa from '../../assets/dark-LOGO.png'
import './_footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <img
        className="footer__dark-logo"
        src={darkLogoKasa}
        alt="image du logo Kasa"
      />
      <p className="footer__text">&#169; 2020 Kasa. All rights reserved.</p>
    </footer>
  )
}

export default Footer
