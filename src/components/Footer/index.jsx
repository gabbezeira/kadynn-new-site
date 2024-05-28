import { FooterContainer } from './styles'
import { HashLink as Link } from 'react-router-hash-link'
import { Instagram, Youtube } from 'lucide-react'
import Logo from '../../assets/images/logo.svg'

export function Footer() {
  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: 'smooth',
    })
  }

  const date = new Date()
  const currentYear = date.getFullYear()

  return (
    <FooterContainer>
      <div className="footer-left-content">
        <Link
          className="link-image"
          to="#"
          smooth
          scroll={(el) => scrollWithOffset(el, 160)}
        >
          <img src={Logo} alt="Logotipo do site Kadynn" />
        </Link>
        <div className="footer-left-texts">
          <ul className="footer-text-group">
            <li>
              <Link
                className="link"
                to="#contas"
                smooth
                scroll={(el) => scrollWithOffset(el, 160)}
              >
                Contas
              </Link>
            </li>
            <li>
              <Link
                className="link"
                to="#loja"
                smooth
                scroll={(el) => scrollWithOffset(el, 350)}
              >
                Loja
              </Link>
            </li>
            <li>
              <Link
                className="link"
                to="#games"
                smooth
                scroll={(el) => scrollWithOffset(el, 160)}
              >
                Games
              </Link>
            </li>
            <li>
              <Link
                className="link"
                to="#noticias"
                smooth
                scroll={(el) => scrollWithOffset(el, 160)}
              >
                Notícias
              </Link>
            </li>
          </ul>
          <p className="footer-copy-text">
            &copy;{currentYear} Kadynn Level Up
          </p>
        </div>
      </div>

      <div className="footer-right-content">
        <ul className="footer-social">
          <li>
            <a
              href="https://instagram.com/kadynn_level_up/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="social-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@KADYNNS"
              target="_blank"
              rel="noreferrer"
            >
              <Youtube className="social-icon" />
            </a>
          </li>
        </ul>
      </div>
    </FooterContainer>
  )
}
