import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 6vh;
    border-bottom: 1px solid ${(props) => props.theme['black']};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    margin-top: 1rem;

    input{
        width: 90%;
        height: 100%;
        background-color: transparent;
        border: none;
        outline: none;
        font-size: 1.1rem;
    }
`