import styled from "styled-components";

export const Container = styled.div`
  text-transform: uppercase;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
  animation: animateOpacity 1s forwards ease;

  > :first-child {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    padding: 5rem 15rem 0;
    text-align: center;

    > h1 {
      font-weight: 300;
      width: 25rem;
    }

    p {
      font-size: 1.4rem;
      font-weight: 300;
      letter-spacing: 6px;
    }
  }

  .divSvgs {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    width: 35%;
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
  }

  > :last-child {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    width: 100%;
    padding: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > :last-child {
      color: ${({ theme }) => theme.COLORS.PURPLE};
      font-weight: 700;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5rem;
    }
  }

  .pedido {
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

  .recibo {
    color: ${({ theme }) => theme.COLORS.PURPLE};
    font-size: 1.3rem;
    font-weight: 500;
    height: 100%;
    border: 3px solid ${({ theme }) => theme.COLORS.PURPLE};
    border-radius: 2rem;
    display: flex;
    box-shadow: ${({ theme }) => theme.COLORS.SHADOW_SUAVE};

    > div {
      width: 50rem;
      border-left: 2px dashed ${({ theme }) => theme.COLORS.PURPLE};

      p:first-of-type {
        border-bottom: 2px dashed ${({ theme }) => theme.COLORS.PURPLE};
        padding: 1rem 2rem;
      }

      p {
        padding: 2px 2rem 0;
        display: flex;
        justify-content: space-between;
      }
    }

    button {
      background: ${({ theme }) => theme.COLORS.PURPLE};
      font-size: 1.5rem;
      height: 25%;
      padding: 1rem 1.5rem;
      border-radius: 2rem;
      margin: 2rem;
      align-self: center;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }
  }

  .divButtonsCount {
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 5px;

    span {
      width: 2rem;
    }

    button {
      background-color: ${({ theme }) => theme.COLORS.PURPLE};
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
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

  .divButtonsBackAndNext {
    display: flex;
    gap: 2rem;
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
`;

export const Ingredients = styled.div`
  width: 100%;
  height: 40%;
  padding: 5rem 8%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5rem;
  animation: animateToRight 0.5s forwards;

  button {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-size: 2.5rem;
    font-weight: 700;
    text-transform: uppercase;
    width: 30rem;
    height: 5rem;
    padding: 1rem;
    border: 1px solid;
    border-radius: 1.5rem;

    &:hover, &:focus, &:focus-visible {
      background-color: ${({ theme }) => theme.COLORS.WHITE};
      color: ${({ theme }) => theme.COLORS.PURPLE};
    }
  }
`;