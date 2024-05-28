/* eslint-disable react/prop-types */
import { Container } from './styles'

export function Card(props) {
  return (
    <Container>
      <a href={props.cardLink}>
        <img src={props.cardImage} alt={props.cardAlt} />
      </a>
    </Container>
  )
}
