import { useState } from "react"
import { Container, Menu, ModalMenu, Navbar, ShoppingBag } from "./styles"
import { MdOutlineShoppingBag } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import { CgClose } from "react-icons/cg";
import { IoPersonOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";
import { IoShirtOutline } from "react-icons/io5";
import { IoGlassesOutline } from "react-icons/io5";
import { GiConverseShoe } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

export function Header(){
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const navigate = useNavigate();

    return(
        <Container>
            <ModalMenu isOpen={isOpenMenu}>
                <CgClose size={24} onClick={() => setIsOpenMenu(false)}/>

                    <li onClick={() => navigate('/cadastro')}><IoPersonOutline size={20}/> Minha conta</li>
                    <li><BsBoxSeam size={20}/> Meus pedidos</li>
                    <li><IoShirtOutline size={20}/> Vestuário</li>
                    <li><IoGlassesOutline size={20}/> Acessórios</li>
                    <li><GiConverseShoe size={20}/> Calçados</li>
            </ModalMenu>

            <Menu>
                <FiMenu size={26} onClick={() => setIsOpenMenu(true)}/>
            </Menu>

            <h1 onClick={() => navigate('/')}>STC</h1>

            <Navbar>
                <li>Minha conta</li>
                <li>Meus pedidos</li>
                <li>Vestuário</li>
                <li>Acessórios</li>
                <li>Calçados</li>
            </Navbar>

            <ShoppingBag>
                <MdOutlineShoppingBag size={26}/>
            </ShoppingBag>
        </Container>
    )
}