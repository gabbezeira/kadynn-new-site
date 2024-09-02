import { FooterContainer } from './styles'
import { HashLink as Link } from 'react-router-hash-link'
import { Instagram, Youtube } from 'lucide-react'
import Logo from '@assets/images/logo.svg'

export function Footer() {
  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset
    window.scrollTo({
      top: elementPosition,
      left: 0,
      behavior: 'smooth',
    })
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { to: '/#contas', label: 'Contas', offset: 160 },
    { to: '/#loja', label: 'Loja', offset: 350 },
    { to: '/#games', label: 'Games', offset: 160 },
    { to: '/#noticias', label: 'Notícias', offset: 160 },
  ]

  const socialLinks = [
    {
      href: 'https://instagram.com/kadynn_level_up/',
      icon: Instagram,
      alt: 'Instagram',
    },
    { href: 'https://www.youtube.com/@KADYNNS', icon: Youtube, alt: 'YouTube' },
  ]

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
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link
                  className="link"
                  to={link.to}
                  smooth
                  scroll={(el) => scrollWithOffset(el, link.offset)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="footer-copy-text">
            &copy;{currentYear} Kadynn Level Up
          </p>
        </div>
      </div>

      <div className="footer-right-content">
        <ul className="footer-social">
          {socialLinks.map((social, index) => (
            <li key={index}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Link para ${social.alt}`}
              >
                <social.icon className="social-icon" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </FooterContainer>
  )
}
