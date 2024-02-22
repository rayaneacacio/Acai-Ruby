import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-areas: 
    "header header" 
    "options main"
  ;
  grid-template-columns: 14rem 1fr;
  grid-template-rows: 24rem 1fr;
  animation: animateOpacity 1s forwards ease;

  header {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_GRADIENT};
    text-align: center;
    height: 22rem;
    padding: 1rem;
    grid-area: header;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
    z-index: 1;

    img {
      width: 46rem;
    }

    img:first-of-type {
      width: 40rem;
      position: absolute;
      bottom: 1rem;
      left: -10rem;
    }

    p {
      font-weight: 200;
      font-size: 3rem;
      position: absolute;
      right: 5rem;
      top: 8rem;
      padding: 0.5rem 1rem;
      border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
      border-radius: 7px;
    }
  }

  .options {
    background: ${({ theme }) => theme.COLORS.WHITE};
    width: 16rem;
    padding: 0 3.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    grid-area: options;

    > img {
      width: 8rem;
      margin-bottom: 2rem;
    }

    > button {
      color: ${({ theme }) => theme.COLORS.PURPLE};
      font-size: 1.2rem;
      font-weight: 700;
      width: 100%;
      height: 10rem;
      padding: 1rem;
      box-shadow: 0px 2.467px 3.7px 1.233px rgba(0, 0, 0, 0.25);
      border-radius: 2rem;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        width: 5rem;
      }

      &:hover, &:focus, &:focus-visible {
        background: ${({ theme }) => theme.COLORS.BACKGROUND_GRADIENT};
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }

    > button:nth-of-type(2) img {
      width: 9rem;
     }
  }

  main {
    background: ${({ theme }) => theme.COLORS.WHITE};
    padding-right: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15rem;
    grid-area: main;
    position: relative;

    .buttonMain > img {
      width: 15rem;
      padding: 1.3rem;
    }

    .buttonMain:first-of-type > img {
      width: 12.7rem;
      padding: 1rem;
    }

    .buttonMain {
      width: 25rem;
      box-shadow: 0px 2px 16px 1px rgba(0, 0, 0, 0.15);
      border-radius: 2rem;
      transition: 0.1s;
      animation: animateToRight 0.5s forwards;

      p {
        background-color: ${({ theme }) => theme.COLORS.PURPLE};
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 1.4rem;
        font-weight: 700;
        padding: 1rem;
        border-radius: 0 0 1.5rem 1.5rem;
      }

      &:hover, &:focus, &:focus-visible {
        border: 2px solid ${({ theme }) => theme.COLORS.PURPLE};
      }
    }
  }

  .buttonBack {
    background-color: ${({ theme }) => theme.COLORS.PURPLE};
    color: ${({ theme }) => theme.COLORS.WHITE};

    svg {
      color: ${({ theme }) => theme.COLORS.WHITE};

      path {
        fill: white;
      }
    }
  }
`;