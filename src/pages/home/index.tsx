import { Header } from "../../components/header";
import { Section } from "./components/section";
import { Container } from "./styles";

export function Home(){
    return(
        <Container>
            <Header/>
            <Section Title="Lançamentos"/>
        </Container>
    )
}