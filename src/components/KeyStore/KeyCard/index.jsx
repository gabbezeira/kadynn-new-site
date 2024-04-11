/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function KeyCard({
  keyImage,
  keyTitle,
  keyPlataform,
  keyLocate,
  keyPrice,
}) {
  return (
    <Container>
      <img
        className="keyImage"
        src={keyImage}
        alt={keyTitle + " " + keyPlataform}
      />
      <div className="keyDetails">
        <div className="keyHeader">
          <h1 className="keyTitle">{keyTitle + " " + `(${keyPlataform})`}</h1>
        </div>
        <p className="keyLocate">{keyLocate}</p>
        <div className="keyFooter">
          <p className="priceText">A partir de</p>
          <a href="" className="keyPrice">
            <input
              className="priceButton"
              type="button"
              value={"R$" + keyPrice}
            />
          </a>
        </div>
      </div>
    </Container>
  );
}
