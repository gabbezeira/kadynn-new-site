import { Container } from './styles'

export function ProductCard(props) {
  return (
    <Container>
      <div
        className="productImage"
        style={{ backgroundImage: `url(${props.productImage})` }}
      />
      <div className="productFooter">
        <h1 className="productTitle">{props.productTitle}</h1>
        <a href="" className="productPrice">
          <input
            className="priceButton"
            type="button"
            value={`R$ ${props.productPrice}`}
          />
        </a>
      </div>
    </Container>
  )
}
