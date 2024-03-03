import { ProductCard } from "../Product"
import Products from "../../mocks/products.json"
import { MyStore } from "./styles"

export default function Store() {

  return(
    <MyStore>
      <div className="top-section">
        <h1 className="title">Loja - Produtos Físicos</h1>
      </div>
      {Products.map((item) => (
          <div key={item.id}>
              <ProductCard
                  productTitle={item.title}
                  productPrice={item.price}
                  productImage={item.Image}
              />
          </div>
      ))}
    </MyStore>
  )
}

