import { Container } from './styles'

export function Card(props) {
  return (
    <Container>
      <a href={props.platformCardLink}>
        <img src={props.platformCardImage} alt={props.platformCardAlt} />
      </a>
    </Container>
  )
}
