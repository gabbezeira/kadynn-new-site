import { Container } from './styles'

export function PageTitle({ title, platformButtons }) {
  const displayStyle = platformButtons === 'true' ? 'flex' : 'none'

  return (
    <Container>
      <h1 className="title">{title}</h1>
      <ul className="platform-buttons" style={{ display: displayStyle }}>
        <li>Xbox One</li>
        <li>Xbox Series S|X</li>
        <li>PS4</li>
        <li>PS5</li>
      </ul>
    </Container>
  )
}
