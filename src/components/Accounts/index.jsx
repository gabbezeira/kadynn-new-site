import { Container } from './styles'
import { PageTitle } from '@components/PageTitle'
import AccountsMock from '@/mocks/accounts.json'
import { Card } from './Card'
import { Pagination } from '../Pagination'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function Accounts() {
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const selectedGame = query.get('game')

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  const filteredAccounts = selectedGame
    ? AccountsMock.filter((account) =>
        account.game.some((g) => g === selectedGame),
      )
    : AccountsMock

  const totalPages = Math.ceil(filteredAccounts.length / itemsPerPage)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const paginatedAccounts = filteredAccounts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedGame])

  return (
    <Container>
      <div className="content" id="contas">
        <PageTitle title={`Contas de ${selectedGame || 'Todos os Jogos'}`} />
        <ul className="games-group">
          {paginatedAccounts.map((item) => (
            <div key={item.id}>
              <Card
                cardId={item.id}
                cardImage={item.image}
                cardTitle={item.title}
                cardPlatform={item.platform}
                cardPrice={item.price}
              />
            </div>
          ))}
        </ul>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Container>
  )
}
