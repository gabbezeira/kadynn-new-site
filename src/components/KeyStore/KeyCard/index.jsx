import { Container } from './styles'

export function KeyCard(props) {
  return (
    <Container>
      <img
        className="keyImage"
        src={props.keyImage}
        alt={props.keyTitle + ' ' + props.keyPlatform}
      />
      <div className="keyDetails">
        <div className="keyHeader">
          <h1 className="keyTitle">
            {props.keyTitle + ' ' + `(${props.keyPlatform})`}
          </h1>
        </div>
        <p className="keyLocate">{props.keyLocate}</p>
        <div className="keyFooter">
          <p className="priceText">A partir de</p>
          <a href="" className="keyPrice">
            <input
              className="priceButton"
              type="button"
              value={'R$' + props.keyPrice}
            />
          </a>
        </div>
      </div>
    </Container>
  )
}
