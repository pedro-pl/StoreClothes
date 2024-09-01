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
`

export const ShoppingBag = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Menu = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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

        svg{
            align-self: flex-start;
            margin-top: 3px;
        }
    }

    svg{
        align-self: flex-end;
    }
`