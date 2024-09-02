import React, { useEffect, useState } from "react";
import { Card } from "../../../../components/card";
import { api } from "../../../../services/axiosRequest";
import { Container, ContainerCard } from "./styles";

interface SectionProps {
    Title: string
}

interface Clothing {
    id: number,
    clothing: string,
    price: number
}

export function Section(props: SectionProps){
    const [clothesImage, setClothesImage] = useState<Clothing[]>([])

    useEffect(() => {
        api.get("clothes").then((response) => {
            setClothesImage(response.data)
            console.log(response.data)
        })
    },[])

    return(
        <Container>
            <h3>{props.Title}</h3>

            <ContainerCard>
                {
                    clothesImage?.map((clothing) => (
                        <React.Fragment key={clothing.id}>
                            <Card url={clothing.clothing} price={clothing.price}/>
                        </React.Fragment>
                    ))
                }
            </ContainerCard>
        </Container>
    )
}