import React from 'react'
import { Container } from './styles'
import { useNavigate, Link } from 'react-router-dom'

import GamesCard from '@/mocks/games-account.json'
import { PageTitle } from '@components/PageTitle'
import { Card } from './Card'

export function AccountsArea() {
  const navigate = useNavigate()

  const handleCardClick = (game) => {
    const gameName = Array.isArray(game) ? game[0] : game
    navigate(`/accounts?game=${encodeURIComponent(gameName)}`)
  }

  return (
    <Container>
      <div className="content" id="contas">
        <PageTitle title="Contas por Jogo" platformButtons="true" />
        <ul className="games-group">
          {GamesCard.map((item) => (
            <div key={item.id} onClick={() => handleCardClick(item.game)}>
              <Card cardImage={item.image} cardAlt={item.imageAlt} />
            </div>
          ))}
        </ul>
        <Link to="/accounts">
          <input className="button" type="button" value="Todas as contas" />
        </Link>
      </div>
    </Container>
  )
}
