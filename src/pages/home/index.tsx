import { Header } from "../../components/header";
import { SearchBar } from "../../components/SearchBar";
import { Container } from "./styles";

export function Home(){
    return(
        <Container>
            <Header/>
            <SearchBar/>
        </Container>
    )
}