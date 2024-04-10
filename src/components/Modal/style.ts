import styled from "styled-components";

export const Container = styled.dialog`
  background: rgba(8, 8, 8, 0.64);
  color: ${({ theme }) => theme.COLORS.PURPLE};
  width: 100%;
  height: 100%;
  position: fixed;
  inset: 0;
  z-index: 1;

  > div {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2rem;
    font-weight: 600;
    width: 100%;
    height: 100%;
    padding: 2rem 5rem;
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }
    
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

  @media(min-width: 1000px) {
    > div {
      height: 25rem;
      border-radius: 4rem 4rem 0 0;
      position: fixed;
      bottom: 0;
      display: grid;
      grid-template-areas: "div1 div3" "divCups div3";
      justify-content: space-evenly;
      animation: animateToTop 0.3s forwards ease;
      transition: 0.5s;
    }
  }
`;

export const Cups = styled.div`
  margin: 2rem 0 5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5rem;

  @media(min-width: 1000px) {
    grid-area: divCups;
    gap: 9rem;
  }
`;

export const Pedido = styled.div`
  > div {
    font-size: 1.6rem;
    width: 15rem;
    height: 13.5rem;
    padding: 1.5rem 2.5rem;
    border: 1px solid ${({ theme }) => theme.COLORS.PURPLE};
    border-radius: 3rem;

    > div {
      > div:first-of-type {
        font-size: 1.4rem;
        width: 4.5rem;
        height: 4.5rem;
        top: 0;
        right: 7px;
      }

      > div:last-of-type {
        height: 8rem;
      }
    }
  }
`;

export const Buttons = styled.div`
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
`;