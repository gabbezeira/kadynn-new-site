/* eslint-disable react/prop-types */
import { Container } from './styles'

export function PageTitle({ title, plataformButtons }) {
  if (plataformButtons === 'true') {
    plataformButtons = 'flex'
  } else if (plataformButtons === 'false') {
    plataformButtons = 'none'
  }

  return (
    <Container>
      <h1 className="title">{title}</h1>
      <ul
        className="plataform-buttons"
        style={{ display: `${plataformButtons}` }}
      >
        <li>Xbox One</li>
        <li>Xbox Series S|X</li>
        <li>PS4</li>
        <li>PS5</li>
      </ul>
    </Container>
  )
}
