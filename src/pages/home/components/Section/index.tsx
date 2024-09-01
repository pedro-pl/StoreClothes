import { Card } from "../../../../components/Card";
import { Container, ContainerCard } from "./styles";

interface SectionProps {
    Title: string
}

export function Section(props: SectionProps){
    return(
        <Container>
            <h3>{props.Title}</h3>

            <ContainerCard>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </ContainerCard>
        </Container>
    )
}