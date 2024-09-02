import { Container } from './styles'
import { PageTitle } from '@components/PageTitle'

import {
  OneImage,
  TwoImage,
  ThreeImage,
  ForImage,
} from '@assets/images/platforms'

export function Platforms() {
  const platforms = [
    { image: OneImage, alt: 'Imagem da Plataforma 1', link: '#' },
    { image: TwoImage, alt: 'Imagem da Plataforma 2', link: '#' },
    { image: ThreeImage, alt: 'Imagem da Plataforma 3', link: '#' },
    { image: ForImage, alt: 'Imagem da Plataforma 4', link: '#' },
  ]

  return (
    <Container>
      <div className="content">
        <PageTitle title="Contas por Plataforma" platformButtons="false" />
        <ul className="games-group">
          {platforms.map((platform, index) => (
            <li key={index}>
              <a href={platform.link} className="Link">
                <img src={platform.image} alt={platform.alt} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
