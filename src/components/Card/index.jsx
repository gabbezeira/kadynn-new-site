/* eslint-disable react/prop-types */
import MyCard from "./styles"

function Card({cardImage, cardLink, cardAlt}){
    return(
        <MyCard>
            <a href={cardLink}>
                <img src={cardImage} alt={cardAlt}/>
            </a>
        </MyCard>
    )
}

export default Card