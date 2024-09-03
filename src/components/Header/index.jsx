import { MenuContainer } from './styles'
import { HashLink as Link } from 'react-router-hash-link'
import Logo from '@assets/images/logo.svg'
import { Grip, LogOut, User } from 'lucide-react'
import { useContext } from 'react'
import { AuthContext } from '@context/AuthContext'

export function Menu() {
  const { signed, logOut } = useContext(AuthContext)

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
        {signed ? (
          <nav className="menu-text-group">
            <Link
              className="link"
              to="/#"
              smooth
              scroll={(el) => scrollWithOffset(el, 160)}
            >
              Ver Site
            </Link>
          </nav>
        ) : (
          <nav className="menu-text-group">
            <Link
              className="link"
              to="/#contas"
              smooth
              scroll={(el) => scrollWithOffset(el, 160)}
            >
              Contas
            </Link>
            <Link
              className="link"
              to="/#loja"
              smooth
              scroll={(el) => scrollWithOffset(el, 140)}
            >
              Loja
            </Link>
            <Link
              className="link"
              to="/#games"
              smooth
              scroll={(el) => scrollWithOffset(el, 140)}
            >
              Games
            </Link>
            <Link
              className="link"
              to="/#noticias"
              smooth
              scroll={(el) => scrollWithOffset(el, 140)}
            >
              Notícias
            </Link>
          </nav>
        )}
      </div>
      {signed ? (
        <div className="menu-buttons">
          <Link className="menu-button" to="/painel">
            <Grip className="icon" />
          </Link>
          <Link className="menu-button" onClick={logOut}>
            <LogOut className="icon" />
            <p className="text">sair</p>
          </Link>
        </div>
      ) : (
        <div className="menu-buttons">
          <Link className="menu-button" to="/login">
            <User className="icon" />
            <p className="text">Entrar</p>
          </Link>
        </div>
      )}
    </MenuContainer>
  )
}
