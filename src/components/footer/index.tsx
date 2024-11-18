import { Container, ContainerInfos, ContainerLinks, SocialMidias } from "./styles";
import { FaPhoneAlt, FaWhatsapp, FaFacebookSquare, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";

export function Footer(){
    return(
        <Container>
            <ContainerInfos>
                    <a href="tel:551155555555">
                        <FaPhoneAlt/> (11) 5555-5555
                    </a>

                    <a href="tel:+5511999999999">
                        <FaWhatsapp/> (11) 99999-9999
                    </a>

                    <a href="mailto:sac_store_clothes@gmail.com">
                        <MdMailOutline/> sac_store_clothes@gmail.com
                    </a>
                
                    <SocialMidias>
                        <FaFacebookSquare/>
                        <BsTwitterX/>
                        <FaLinkedin/>
                        <FaInstagram/>
                    </SocialMidias>
            </ContainerInfos>

            <ContainerLinks>
                    <a href="#">HOME</a>
                    <a href="#">SOBRE NÓS</a>
                    <a href="#">AJUDA</a>
                    <a href="#">POLÍTICA DE PRIVACIDADE</a>
            </ContainerLinks>
            
            <span>Copyright © 2024 • Store Clothes</span>
        </Container>
    )
}