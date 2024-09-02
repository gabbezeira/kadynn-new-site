import { MenuContainer } from './styles'
import { HashLink as Link } from 'react-router-hash-link'
import Logo from '@assets/images/logo.svg'

export function Menu() {
  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <MenuContainer>
      <div className="menu-left-content">
        <Link
          className="link-image"
          to="/#"
          smooth
          scroll={(el) => scrollWithOffset(el, 160)}
        >
          <img src={Logo} alt="Logotipo do site Kadynn" />
        </Link>
        <ul className="menu-text-group">
          <li>
            <Link
              className="link"
              to="/#contas"
              smooth
              scroll={(el) => scrollWithOffset(el, 160)}
            >
              Contas
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="/#loja"
              smooth
              scroll={(el) => scrollWithOffset(el, 140)}
            >
              Loja
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="/#games"
              smooth
              scroll={(el) => scrollWithOffset(el, 140)}
            >
              Games
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="/#noticias"
              smooth
              scroll={(el) => scrollWithOffset(el, 140)}
            >
              Notícias
            </Link>
          </li>
        </ul>
      </div>
      <button className="menu-button">Login</button>
    </MenuContainer>
  )
}
