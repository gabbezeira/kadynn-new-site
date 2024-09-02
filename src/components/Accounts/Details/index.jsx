import { Container } from './styles'
import { useParams } from 'react-router-dom'
import AccountsMock from '@/mocks/accounts.json'

export function DetailsPage() {
  const { id } = useParams()
  const product = AccountsMock.find((item) => item.id === parseInt(id))

  if (!product) {
    return <div>Produto não encontrado</div>
  }

  return (
    <Container>
      <div className="imageArea">
        <img src={product.image} alt="" className="image" />
      </div>
      <div className="content">
        <div className="header">
          <div className="texts">
            <h1 className="title">{product.title}</h1>
            <p className="platforms">
              {product.platform.map((platform, index) => (
                <span key={index} className="platformItem">
                  {platform}
                  {index < product.platform.length - 1 && ', '}
                </span>
              ))}
            </p>
          </div>
          <button className="priceButton">{`Comprar por R$ ${product.price}`}</button>
        </div>
        <p className="descriptionText">Descrição da Conta:</p>
        <div className="infoArea">{product.description}</div>
      </div>
    </Container>
  )
}
