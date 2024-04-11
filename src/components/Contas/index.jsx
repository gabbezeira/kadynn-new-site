import { Container } from "./styles";
import GamesCard from "../../mocks/games-account.json";
import { Card } from "./Card";
import { PageTitle } from "../PageTitle";

export function Contas() {
  return (
    <Container>
      <div className="content" id="contas">
        <PageTitle title="Contas por Jogo" plataformButtons="true" />
        <ul className="games-group">
          {GamesCard.map((item) => (
            <div key={item.id}>
              <Card
                cardImage={item.image}
                cardLink="#"
                cardAlt={item.imageAlt}
              />
            </div>
          ))}
        </ul>
        <a href="">
          <input className="button" type="button" value="Todas as contas" />
        </a>
      </div>
    </Container>
  );
}
