import { Container, ContainerCard } from "./styles";
import { shirt } from "../../../../mocks/shirts";
import React from "react";

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
                        </React.Fragment>
                    ))
                }
            </ContainerCard>
        </Container>
    )
}