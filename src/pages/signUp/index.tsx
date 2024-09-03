import React from "react";
import { Header } from "../../components/header";
import { shirt } from "../../mocks/shirts";
import { Container, ContainerCard } from "./styles";
import { Card } from "../../components/card";

export function SignUp(){

    return(
        <Container>
            <Header/>
            <h3>PÁGINA DE CADASTRO</h3>
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