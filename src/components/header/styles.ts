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

    svg{
        cursor: pointer;
    }

    h1{
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
    height: 50vh;
    position: absolute;
    top: 1rem;
    left: 1rem;
    right: 1rem;
    background-color: ${(props) => props.theme['white']};
    transition: 0.3s;
    display: ${(props) => props.isOpen ? "flex" : "none"};
    flex-direction: column;
    z-index: 999;
    padding: 10px 10px 0 1.5rem;
    gap: 1.5rem;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0.275rem;

    li{
        list-style: none;
        font-size: 1.2rem;
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
        border: 1.5px;
        cursor: pointer;
        transition: 1s;

        &::after {
            content: "";
            display: block;
            width: 0;
            height: 2px;
            background: ${(props) => props.theme['black']};
            transition: .3s ease-out;
        }

        &:hover::after {
            width: 100%;
        }

        /* &:hover{
            border-bottom: 1.5px solid ${(props) => props.theme['black']};
            transition: 1s;
        } */
    }
`