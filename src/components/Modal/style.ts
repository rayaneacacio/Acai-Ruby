import styled from "styled-components";

export const Container = styled.dialog`
  > div {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2rem;
    font-weight: 600;
    width: 100%;
    height: 25rem;
    position: fixed;
    bottom: 0;
    padding: 2rem 5rem;
    border-radius: 4rem 4rem 0 0;
    display: grid;
    grid-template-areas: "div1 div3" "divCups div3";
    justify-content: space-evenly;

    animation: animateToTop 0.3s forwards ease;
    transition: 0.5s;
    
    > div:first-of-type {
      display: flex;
      align-items: center;
      gap: 5px;
      grid-area: div1;
    }

    > div:last-of-type {
      grid-area: div3;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 1.6rem;
      font-weight: 500;
      text-align: center;
    }
  }

  .divCups {
    grid-area: divCups;
    display: flex;
    gap: 9rem;
  }

  .divPedido {
    > div {
      font-size: 1.4rem;
      width: 15rem;
      padding: 1.5rem 2.5rem;
      border: 1px solid ${({ theme }) => theme.COLORS.PURPLE};
      border-radius: 3rem;

      > div:first-of-type {
        width: 4.5rem;
        height: 4.5rem;
        top: 2rem;
        right: 3rem;
      }

      > div:last-of-type {
        height: 8rem;
      }
    }
  }

  .divButtonsBackAndNext {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2rem;
    margin-top: 2rem;

    button {
      background-color: ${({ theme }) => theme.COLORS.PURPLE};
      color: ${({ theme }) => theme.COLORS.WHITE};
      position: static;
    }
  }
`;