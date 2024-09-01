import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme['blue-100']};
    padding: 0 10% 0 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

