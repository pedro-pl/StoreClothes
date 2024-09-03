import { Container } from "./styles";

interface SectionProps {
    Title: string
}

export function Section(props: SectionProps){


    return(
        <Container>
            <h3>{props.Title}</h3>

        </Container>
    )
}