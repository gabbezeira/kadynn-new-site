import { Container } from './styles'
import BannerImg from '@assets/images/logo.jpg'

export function Banner() {
  return <Container style={{ backgroundImage: `url(${BannerImg})` }} />
}
