import { Container } from "./styles"
import GamesCard from "../../mocks/games-account.json"
import Card from "../Card"

export function Contas() {
    return (
        <Container>
            <div className="content" id="contas">
                <div className="top-section">
                    <h1 className="left">Contas por jogo</h1>
                    <ul className="right">
                        <li>Xbox One</li>
                        <li>Xbox Series S|X</li>
                        <li>PS4</li>
                        <li>PS5</li>
                    </ul>
                </div>
                <ul className="games-group">
                    {GamesCard.map((item) => (
                        <div key={item.id}>
                            <Card 
                                cardImage={item.Image}
                                cardLink="#"
                                cardAlt={item.ImageAlt}
                            />
                        </div>
                    ))}
                </ul>
                <a href="">
                    <input className="button" type="button" value="Todas as contas" />
                </a>
            </div>
        </Container>
    )
}