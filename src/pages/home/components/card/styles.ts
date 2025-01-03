import styled from "styled-components"

interface FavProps {
    isFav: boolean
}

export const Container = styled.div <FavProps>`
    width: 75%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    flex: 0 0 auto;
    position: relative;

    svg {
        position: absolute;
        align-self: flex-end;
        margin: 10px 10px 0 0;
        color: ${(props) => props.isFav ? props.theme['red'] : props.theme['gray-900']};
        cursor: pointer;
        border-radius: 50%;
        transition: all.2s;

        &:hover{
            color: ${(props) => props.isFav ? props.theme['red'] : props.theme['red']};
            transition: all.2s;
        }
    }

    @media (max-height: 400px) or (min-width: 500px){
        width: 30%;
    }

    @media (min-width: 1000px){
        width: 18%;
    }

    @media (min-height: 950px){
        width: 30%;
    }
`

export const ImageClothing = styled.img`
    width: 100%;
    height: 70%;
    cursor: pointer;
`

export const BuyButton = styled.button`
    width: 100%;
    height: 13%;
    background-color: ${(props) => props.theme['green-200']};
    border: none;
    outline: none;
    color: ${(props) => props.theme['white']};
    font-size: 1.1rem;
    cursor: pointer;
    transition: all.3s;

    &:hover{
        transition: all.3s;
        background-color: ${(props) => props.theme['green-300']};
    }
`

export const NameClothing = styled.p`
    width: 100%;
    height: 8.5%;
    font-size: 1rem;
    padding-left: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const PriceClothing = styled.p`
    height: 8.5%;
    font-size: 0.8rem;
    margin-left: 5px;
    font-weight: 600;
`