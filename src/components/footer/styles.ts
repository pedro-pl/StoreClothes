import styled from "styled-components";

export const Container = styled.footer`
    width: 100vw;
    height: 70vh;
    padding: 2rem 10vw 2rem 10vw;
    margin-top: 2rem;
    background: ${(props) => props.theme['gray-900']};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    span {
        margin: 1.2rem auto 0 auto;
        color: ${(props) => props.theme['gray-100']};
        font-size: 0.75rem;
    }


    @media (min-width: 750px){
        height: 50vh;
        //padding: 2rem 10vw 1rem 10vw;
        flex-direction: row-reverse;
        justify-content: center;

        span {
            width: 100%;
            text-align: center;
            margin: 0;
            font-size: 0.8rem;
            position: absolute;
            bottom: 1rem;
        }
    }

    @media (min-width: 1080px){
        justify-content: space-between;

        span {
            width: 80%;
            text-align: center;
            margin: 0;
            font-size: 0.8rem;
            position: absolute;
            bottom: 1rem;
        }
    }
`

export const ContainerInfos = styled.div`
    width: 100%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    a {
        text-decoration: none;
        color: ${(props) => props.theme['gray-100']};
        display: flex;
        align-items: center;
        gap: 0.5rem;

        svg {
            font-size: 1.2rem;
        }
    }

    @media (min-width: 750px) {
        width: 70%;
        justify-content: space-between;
        align-items: flex-end;

        a {
            font-size: 0.875rem;
        }

        svg {
            font-size: 1rem;
        }
    }

    @media (min-width: 1080px){
        width: 40%;
        justify-self: flex-start;
    }
`

export const SocialMidias = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;

    svg {
        font-size: 1.8rem;
        color: ${(props) => props.theme['gray-100']};
        cursor: pointer;
    }

    @media (min-width: 750px) {
        justify-content: flex-end;
    }
`

export const ContainerLinks = styled.nav`
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    a{
        text-decoration: none;
        color: ${(props) => props.theme['gray-100']};
        margin-right: 1rem;
    }

    @media (min-width: 750px) {
        align-items: flex-start;
        height: 30vh;

        a {
            margin: 0;
            font-size: 0.875rem;

            &::after {
                content: "";
                display: block;
                width: 0;
                height: 2px;
                background: ${(props) => props.theme['gray-100']};
                transition: .3s ease-out;
            }

            &:hover::after {
                width: 100%;
            }
        }
    }

    @media (min-width: 1080px){
        width: 40%;
    }
`