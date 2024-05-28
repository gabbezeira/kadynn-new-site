/* eslint-disable react/prop-types */
import { Container } from './styles'

export function ProductCard({ productTitle, productPrice, productImage }) {
  return (
    <Container>
      <div
        className="productImage"
        style={{ backgroundImage: `url(${productImage})` }}
      />
      <div className="productFooter">
        <h1 className="productTitle">{productTitle}</h1>
        <a href="" className="productPrice">
          <input
            className="priceButton"
            type="button"
            value={'R$' + productPrice}
          />
        </a>
      </div>
    </Container>
  )
}
