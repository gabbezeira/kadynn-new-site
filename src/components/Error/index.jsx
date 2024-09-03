import { Container } from './styles'
import Image from '@assets/images/error.svg'

export function Error(props) {
  return (
    <Container>
      <img className="notfound-image" src={Image} alt="error image" />
      <div className="notfound-text">{props.errorText}</div>
    </Container>
  )
}
