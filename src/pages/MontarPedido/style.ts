import styled from "styled-components";

export const Container = styled.div`
  text-transform: uppercase;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
  animation: animateOpacity 1s forwards ease;

  .titles {
    padding: 3rem 2rem;
    text-align: center;

    > h1 {
      display: none;
    }

    p {
      font-size: 1.4rem;
      font-weight: 300;
      letter-spacing: 6px;
    }
  }

  .svgOnFocus {
    background-color: ${({ theme }) => theme.COLORS.WHITE} !important;

    svg {
      border: 1px solid ${({ theme }) => theme.COLORS.PURPLE};
      border-radius: 50%;
      padding: 2px;
    }

    svg path {
      fill: ${({ theme }) => theme.COLORS.PURPLE};
    }
  }

  .divIsLoading {
    font-size: 2rem;
    height: 40rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .buttonPedir {
    background-color: ${({ theme }) => theme.COLORS.PURPLE};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.6rem;
    font-weight: 500;
    padding: 0.5rem 1.5rem;
    border-radius: 10rem;
    box-shadow: ${({ theme }) => theme.COLORS.SHADOW_SUAVE};
  }

  @media(min-width: 1000px) {
    .titles {
      width: 100%;
      height: 12rem;
      display: flex;
      align-items: end;
      justify-content: space-around;
      padding: 1rem 0 0;
      text-align: center;

      > h1 {
        display: block;
        font-weight: 300;
        width: 25rem;
      }
    }
  }
`;

export const Svgs = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 80%;
  height: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    background-color: ${({ theme }) => theme.COLORS.PURPLE_22};
    width: 5rem;
    height: 5rem;
    border: 2px solid;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: ${({ theme }) => theme.COLORS.SHADOW_SUAVE};
  }

  svg {
    padding: 7px;
  }

  @media(min-width: 420px) {
    width: 38rem;
  }
`;

export const Ingredients = styled.div`
  width: 100%;
  padding: 3rem 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5rem;
  animation: animateToRight 0.5s forwards;

  button {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    min-width: 15rem;
    height: 5rem;
    padding: 1rem 1.5rem;
    border-radius: 1.5rem;
    box-shadow: 0px 0px 1px 1.3px ${({ theme }) => theme.COLORS.WHITE};

    &:focus-visible {
      box-shadow: 0px 0px 1px 4px ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  .buttonOnFocus{
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.PURPLE};
  }

  @media(min-width: 1000px) {
    padding: 2rem 8% 0;

    button {
      font-size: 2.5rem;
      min-width: 30rem;
    }
  }
`;

export const Display = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  padding: 3rem;
  display: grid;
  grid-template-areas: "buttons buttons" "recibo recibo";
  justify-content: center;
  gap: 3rem;

  .pedido {
    display: none;
  }

  .buttonBack {
    background-color: ${({ theme }) => theme.COLORS.PURPLE};
    color: ${({ theme }) => theme.COLORS.WHITE};
    position: static;

    svg {
      color: ${({ theme }) => theme.COLORS.WHITE};

      path {
        fill: white;
      }
    }
  }

  @media(min-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
  }

  @media(min-width: 1200px) {
    .pedido {
      display: block;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_GRADIENT};
      font-size: 1rem;
      width: 12rem;
      height: 12rem;
      border-radius: 18px;
      box-shadow: 0px 1.462px 4.387px 2.925px rgba(0, 0, 0, 0.25);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;

      svg {
        position: absolute;
        right: 5px;
        top: 5px;
      }

      img {
        width: 3.5rem;
        margin-bottom: 5px;
      }

      p:last-of-type {
        letter-spacing: 2px;
      }
    }
  }
`;

export const ViewRecibo = styled.div`
  color: ${({ theme }) => theme.COLORS.PURPLE};
  font-size: 1.3rem;
  font-weight: 500;
  height: 10rem;
  border: 3px solid ${({ theme }) => theme.COLORS.PURPLE};
  border-radius: 2rem;
  display: flex;
  box-shadow: ${({ theme }) => theme.COLORS.SHADOW_SUAVE};
  grid-area: recibo;

  button {
    background: ${({ theme }) => theme.COLORS.PURPLE};
    font-size: 1.5rem;
    height: 25%;
    padding: 1rem;
    border-radius: 2rem;
    margin: 1rem;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  > div {
    width: 100%;
    border-left: 2px dashed ${({ theme }) => theme.COLORS.PURPLE};
    overflow: hidden;

    p:first-of-type {
      border-bottom: 2px dashed ${({ theme }) => theme.COLORS.PURPLE};
      padding: 1rem 2rem;
    }

    p {
      padding: 2px 1rem 0;
      display: flex;
      justify-content: space-between;
      gap: 1rem;
    }
  }

  @media(min-width: 1100px) {
    height: 100%;

    button {
      padding: 1rem 1.5rem;
      margin: 2rem;
    }

    > div {
      width: 50rem;
    }

    > div p {
      padding: 2px 2rem 0;
    }
  }
`;

export const ButtonsDisplay = styled.div`
  color: ${({ theme }) => theme.COLORS.PURPLE};
  font-weight: 700;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5rem;
  grid-area: buttons;

  > :first-child {
    width: 100%;
    text-align: end;
  }

  > :last-child {
    display: flex;
    gap: 2rem;
  }

  .buttonsCount {
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2rem;
    margin-bottom: 5px;

    span {
      width: 2rem;
    }

    button  {
      background-color: ${({ theme }) => theme.COLORS.PURPLE};
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media(min-width: 700px) {
    > :first-child {
      text-align: center;
    }

    .buttonsCount {
      justify-content: center;
    }
  }

  @media(min-width: 1000px) {
    align-items: center;
  }
`;