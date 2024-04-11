import { Container } from "./styles";
import { PageTitle } from "../PageTitle";

import OneImage from "../../assets/images/plataforms/1.svg";
import TwoImage from "../../assets/images/plataforms/2.svg";
import ThreeImage from "../../assets/images/plataforms/3.svg";
import ForImage from "../../assets/images/plataforms/4.svg";

export function Plataformas() {
  return (
    <Container>
      <div className="content">
        <PageTitle title="Contas por Plataforma" plataformButtons="false" />
        <ul className="games-group">
          <a href="#" className="Link">
            <li>
              <img src={OneImage} alt="" />
            </li>
          </a>
          <a href="#" className="Link">
            <li>
              <img src={TwoImage} alt="" />
            </li>
          </a>
          <a href="#" className="Link">
            <li>
              <img src={ThreeImage} alt="" />
            </li>
          </a>
          <a href="#" className="Link">
            <li>
              <img src={ForImage} alt="" />
            </li>
          </a>
        </ul>
      </div>
    </Container>
  );
}
