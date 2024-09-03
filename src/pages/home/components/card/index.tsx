import { useState } from "react";
import { BuyButton, Container, ImageClothing, NameClothing, PriceClothing } from "./styles";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { useNavigate } from "react-router-dom";

interface ClothingProps {
    url: string,
    price: number
    name: string,
}

export function Card(props: ClothingProps){
    const [fav, setFav] = useState(false);
    const navigate = useNavigate();

    return(
        <Container isFav={fav}>
            {
                fav ? <IoMdHeart size={22} onClick={() => setFav(false)} /> : <IoMdHeartEmpty size={22} onClick={() => setFav(true)}/>
            }
            <ImageClothing src={props.url} onClick={() => navigate('/produto')}/>

            <BuyButton  onClick={() => navigate('/produto')}>COMPRAR</BuyButton>

            <NameClothing>{props.name}</NameClothing>
            <PriceClothing>R$ {props.price.toString().replace('.', ',')}</PriceClothing>
        </Container>
    )
}