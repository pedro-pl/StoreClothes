import { Container } from "./styles";
import { IoSearchOutline } from "react-icons/io5";

export function SearchBar(){
    return(
        <Container>
            <input type="text" placeholder="O que você está procurando?"/>

            <IoSearchOutline size={22}/>
        </Container>
    )
}