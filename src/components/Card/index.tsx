import { useState } from "react";
import { BuyButton, Container, ImageClothing, NameClothing, PriceClothing } from "./styles";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { useNavigate } from "react-router-dom";

interface ClothingProps {
    url: string,
    price: number
}

export function Card(props: ClothingProps){
    const [fav, setFav] = useState(false);
    const navigate = useNavigate();

    return(
        <Container isFav={fav}>
            {
                fav ? <IoMdHeart size={22} onClick={() => setFav(false)} /> : <IoMdHeartEmpty size={22} onClick={() => setFav(true)}/>
            }
            <ImageClothing src="https://images.tcdn.com.br/img/img_prod/1258065/camiseta_oversized_crista_unissex_para_todos_9_1_9689be74aeab08d2044f184ea37c3fe0.jpg" onClick={() => navigate('/produto')}/>

            <BuyButton  onClick={() => navigate('/produto')}>COMPRAR</BuyButton>

            <NameClothing>Camiseta</NameClothing>
            <PriceClothing>R$ {props.price.toString().replace('.', ',')}</PriceClothing>
        </Container>
    )
}