import { Container } from './styles'
import { Link } from 'react-router-dom'

export function Card(props) {
  return (
    <Container>
      <Link to={`/accounts/details/${props.cardId}`} className="cardImageLink">
        <div
          className="cardImage"
          style={{ backgroundImage: `url(${props.cardImage})` }}
        />
      </Link>
      <div className="cardDetails">
        <div className="cardHeader">
          <Link
            to={`/accounts/details/${props.cardId}`}
            className="cardTitleLink"
          >
            <h1 className="cardTitle">{props.cardTitle}</h1>
          </Link>
        </div>
        <div className="cardPlatform">
          {props.cardPlatform.map((platform, index) => (
            <span key={index} className="platformItem">
              {platform}
              {index < props.cardPlatform.length - 1 && ', '}
            </span>
          ))}
        </div>
        <div className="cardFooter">
          <p className="priceText">Comprar por</p>
          <button className="priceButton">{`R$ ${props.cardPrice}`}</button>
        </div>
      </div>
    </Container>
  )
}
