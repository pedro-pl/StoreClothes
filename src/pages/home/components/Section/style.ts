import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 65vh;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-height: 500px){
        height: 80vh;
    }

    @media (min-height: 600px){
        height: 60vh;
    }
`

export const ArrowButton = styled.button<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  color: ${(props) => props.theme['gray-900']};
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ direction }) => direction === 'left' ? 'left: 10%;' : 'right: 10%;'}

  @media (max-height: 900px){
    display: none;
  }
`;

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
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none;
    }
`