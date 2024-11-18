import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 18vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 580px){
        height: 21vh;
    }

    @media (min-width: 780px){
        height: 23vh;
    }
`

export const ContainerCategorys = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    overflow-x: auto;
    white-space: nowrap;
    scroll-behavior: smooth;
    gap: 1rem;

    @media (min-width: 1080px){
        justify-content: flex-start;
        gap: 2rem;
    }

    @media (min-width: 780px){
        height: 70%;
    }
`

export const CircleCategory = styled.div`
    min-width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background: ${(props) => props.theme['gray-300']};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all.3s;

    @media (min-width: 680px){
        width: 6rem;
        height: 6rem
    }

    @media (min-width: 780px){
        width: 7rem;
        height: 7rem
    }

    @media (min-width: 1080px){
        width: 8rem;
        height: 8rem
    }

    svg {
        color: ${(props) => props.theme['gray-900']};
        font-size: 2.5rem;

        @media (min-width: 780px){
            font-size: 3.1rem;
        }
    }

    &:hover{
        transition: all.3s;
        background: ${(props) => props.theme['gray-500']};
    }
`
