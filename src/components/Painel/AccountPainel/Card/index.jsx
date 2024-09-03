import React from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom'
import { Pencil, Trash2 } from 'lucide-react'

export function Card({
  cardNumericId,
  cardImage,
  cardTitle,
  cardPlatform,
  cardPrice,
  onDelete,
}) {
  return (
    <Container>
      <div className="cardPainelOptions">
        <button className="cardPainelButton" onClick={onDelete}>
          <Trash2 className="icon" />
        </button>
        <Link
          className="cardPainelButton"
          to={`/accounts/updateaccount/${cardNumericId}`}
        >
          <Pencil className="icon" />
        </Link>
      </div>
      <Link to={`/accounts/details/${cardNumericId}`} className="cardImageLink">
        <div
          className="cardImage"
          style={{ backgroundImage: `url(${cardImage})` }}
        />
      </Link>
      <div className="cardDetails">
        <div className="cardHeader">
          <Link
            to={`/accounts/details/${cardNumericId}`}
            className="cardTitleLink"
          >
            <h1 className="cardTitle">{cardTitle}</h1>
          </Link>
        </div>
        <div className="cardPlatform">
          {cardPlatform.map((platform, index) => (
            <span key={index} className="platformItem">
              {platform}
              {index < cardPlatform.length - 1 && ', '}
            </span>
          ))}
        </div>
        <div className="cardFooter">
          <p className="priceText">Comprar por</p>
          <button className="priceButton">{`R$ ${cardPrice},00`}</button>
        </div>
      </div>
    </Container>
  )
}
