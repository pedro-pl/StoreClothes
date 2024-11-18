import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { SearchBar } from "../../components/searchBar";
import { Carousel } from "./components/sectionCarousel/sectionCarousel";
import { Category } from "./components/sectionCategory/sectionCategory";
import { Container } from "./styles";

export function Home(){
    return(
        <Container>
            <Header/>
            <SearchBar/>
            <Carousel Title="Lançamentos"/>
            <Category Title="Categorias"/>
            <Footer/>
        </Container>
    )
}