import { ProductCard } from "./Product";
import Products from "../../mocks/products.json";
import { Container } from "./styles";
import { PageTitle } from "../PageTitle";

export function Store() {
  return (
    <Container>
      <PageTitle title="Loja - Produtos Fisicos" plataformButtons="false" />
      <div className="productGrid">
        {Products.map((item) => (
          <div key={item.id}>
            <ProductCard
              productTitle={item.title}
              productPrice={item.price}
              productImage={item.Image}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
