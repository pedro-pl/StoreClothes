import { Container, ContainerCard } from "./styles";
import { shirt } from "../../../../mocks/shirts";
import React from "react";
import { Card } from "../../../../components/card/index.tsx";

interface SectionProps {
    Title: string
}

export function Section(props: SectionProps){


    return(
        <Container>
            <h3>{props.Title}</h3>

            <ContainerCard>
                {
                    shirt?.map((shirt) => (
                        <React.Fragment key={shirt.id}>
                            <Card url={shirt.url} name={shirt.name} price={shirt.price}/>
                        </React.Fragment>
                    ))
                }
            </ContainerCard>
        </Container>
    )
}