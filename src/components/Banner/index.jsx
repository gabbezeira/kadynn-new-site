import { Container } from './styles'
import BannerImg from '@assets/images/ssss.jpg'

export function Banner() {
  return <Container style={{ backgroundImage: `url(${BannerImg})` }} />
}
