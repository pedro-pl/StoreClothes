import { Header } from "../../components/header";
import { SearchBar } from "../../components/SearchBar";
import { Section } from "./components/Section";
import { Container } from "./styles";

export function Home(){
    return(
        <Container>
            <Header/>
            <SearchBar/>
            <Section Title="Lançamentos"/>
        </Container>
    )
}