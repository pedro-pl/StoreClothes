import { useState } from "react";
import { BuyButton, Container, ImageClothing, NameClothing, PriceClothing } from "./styles";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

export function Card(){
    const [fav, setFav] = useState(false)

    return(
        <Container isFav={fav}>
            {
                fav ? <IoMdHeart size={22} onClick={() => setFav(false)} /> : <IoMdHeartEmpty size={22} onClick={() => setFav(true)}/>
            }
            <ImageClothing src="https://bawclothing.vtexassets.com/arquivos/ids/277011/0077030024_01.jpg?v=638356172995800000"/>

            <BuyButton>COMPRAR</BuyButton>

            <NameClothing>Camiseta</NameClothing>
            <PriceClothing>R$ 79,90</PriceClothing>
        </Container>
    )
}