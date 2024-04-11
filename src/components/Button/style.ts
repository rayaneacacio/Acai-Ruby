import styled from "styled-components";

export const Container = styled.button`
  div {
    background: ${({ theme }) => theme.COLORS.WHITE};
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    margin-bottom: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: ${({ theme }) => theme.COLORS.SHADOW};
  }

  svg {
    width: 15rem;
  }

  p {
    animation: animateToRight 0.5s forwards;
  }

  @media(min-width: 1000px) {
    div {
      width: 25rem;
      height: 25rem;
    }
  }
`;