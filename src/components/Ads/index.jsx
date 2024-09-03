import { Container } from './styles'

export function Advertising(props) {
  const flexDirection = props.adImagePosition === 'left' ? 'row-reverse' : 'row'

  return (
    <Container
      style={{
        backgroundImage: `url(${props.adBackground})`,
        flexDirection,
      }}
    >
      <div className="text-container">
        <div className="text-content">
          <h2>{props.topTitle}</h2>
          <h1 style={{ color: props.colorTitle }}>{props.title}</h1>
          <h2>
            {props.bottomTitle} <b>{props.bottomTitleValue}</b>
          </h2>
        </div>
        <a href={props.buttonLink} target="_blank" rel="noreferrer">
          <input className="ad-button" type="button" value={props.buttonText} />
        </a>
      </div>
      <div className="image-container">
        <img className="image" src={props.adImage} alt="Advertising Image" />
      </div>
    </Container>
  )
}
