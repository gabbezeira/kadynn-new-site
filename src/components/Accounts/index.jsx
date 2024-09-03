import { Container } from './styles'
import { PageTitle } from '@components/PageTitle'
import { Card } from './Card'
import { Pagination } from '../Pagination'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { Loader } from '../Loader'
import { Error } from '../Error'

export function Accounts() {
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const selectedGame = query.get('game')
  const selectedPlatform = query.get('platform')

  const [currentPage, setCurrentPage] = useState(1)
  const [accounts, setAccounts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const itemsPerPage = 8

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/accounts', {
          params: { platform: selectedPlatform },
        })
        if (Array.isArray(response.data)) {
          setAccounts(response.data)
        } else {
          throw new Error('Resposta inesperada da API')
        }
      } catch (err) {
        setError('Erro ao carregar contas')
      } finally {
        setLoading(false)
      }
    }

    fetchAccounts()
  }, [selectedPlatform])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedGame, selectedPlatform])

  const filteredAccounts = accounts.filter(
    (account) =>
      (!selectedGame ||
        (account.game && account.game.includes(selectedGame))) &&
      (!selectedPlatform ||
        (account.platform &&
          account.platform.some((p) => p === selectedPlatform))),
  )

  const totalPages = Math.ceil(filteredAccounts.length / itemsPerPage)
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const paginatedAccounts = filteredAccounts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )

  return (
    <Container>
      <div className="content" id="contas">
        <PageTitle
          title={`Contas ${selectedGame ? `de ${selectedGame}` : ''} ${selectedPlatform ? `para ${selectedPlatform}` : ''}`}
        />
        {loading ? (
          <Loader />
        ) : error ? (
          <Error errorText={error} />
        ) : filteredAccounts.length === 0 ? (
          <Error
            errorText={`Nenhum resultado para ${selectedGame ? `${selectedGame}` : ''} ${selectedPlatform ? ` ${selectedPlatform}` : ''} encontrado`}
          />
        ) : (
          <>
            <ul className="games-group">
              {paginatedAccounts.map((item) => (
                <div key={item.numericId}>
                  <Card
                    cardNumericId={item.numericId}
                    cardImage={item.image}
                    cardTitle={item.title}
                    cardPlatform={item.platform}
                    cardPrice={item.price}
                  />
                </div>
              ))}
            </ul>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </Container>
  )
}
