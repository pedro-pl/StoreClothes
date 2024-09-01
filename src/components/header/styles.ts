import styled from "styled-components";

interface IsOpenProps {
    isOpen: boolean;
}

export const Container = styled.header`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;

    svg{
        cursor: pointer;
    }
`

export const ShoppingBag = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Menu = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 901px){
        display: none;
    }
`

export const ModalMenu = styled.div<IsOpenProps>`
    width: 50%;
    height: 100vh;
    position: absolute;
    margin-top: 90vh;
    margin-left: ${(props) => props.isOpen ? "-4.5vw" : "-70vw"};
    background-color: ${(props) => props.theme['white']};
    transition: 0.3s;
    display: flex;
    flex-direction: column;
    z-index: 999;
    padding: 10px;
    gap: 1.5rem;

    li{
        list-style: none;
        font-size: 1.1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;

        svg{
            align-self: flex-start;
            margin-top: 3px;
        }
    }

    svg{
        align-self: flex-end;
    }
`

export const Navbar = styled.nav`
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 901px){
        display: none;
    }

    li{
        list-style: none;
        cursor: pointer;
    }
`