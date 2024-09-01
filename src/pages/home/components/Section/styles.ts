import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 65vh;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
`