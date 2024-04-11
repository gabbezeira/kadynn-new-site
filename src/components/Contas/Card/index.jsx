/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function Card({ cardImage, cardLink, cardAlt }) {
  return (
    <Container>
      <a href={cardLink}>
        <img src={cardImage} alt={cardAlt} />
      </a>
    </Container>
  );
}
