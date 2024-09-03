import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme['off-white']};
    padding: 0 10% 0 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerCard = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    overflow-x: auto;
    white-space: nowrap;
    gap: 1rem;

    &::-webkit-scrollbar {
        display: none;
    }
`