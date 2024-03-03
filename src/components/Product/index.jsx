/* eslint-disable react/prop-types */
import { MyProduct } from "./styles"

export function ProductCard({productTitle, productPrice, productImage}) {
    return(
        <MyProduct>
            <div className="product-image" style={{backgroundImage: `url(${productImage})`}}/>
            <div className="product-footer">
                <h1 className="product-title">{productTitle}</h1>
                <a href="" className="product-price">
                    <input className="price-button" type="button" value={"R$" + productPrice}/>
                </a>
            </div>
        </MyProduct>
    )
}