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
    }
`

export const ImageClothing = styled.img`
    width: 100%;
    height: 77%;
`

export const BuyButton = styled.button`
    width: 100%;
    height: 13%;
    background-color: ${(props) => props.theme['green-200']};
    border: none;
    outline: none;
    color: ${(props) => props.theme['white']};
    font-size: 1.1rem;
`

export const NameClothing = styled.p`
    width: 100%;
    font-size: 1rem;
    padding-left: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const PriceClothing = styled.p`
    font-size: 0.8rem;
    margin-left: 5px;
    font-weight: 600;
`