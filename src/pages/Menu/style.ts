import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15rem;
  animation: animateOpacity 1s forwards ease;

  header {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_GRADIENT};
    text-align: center;
    height: 22rem;
    padding: 1rem;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
    z-index: 1;
    display: flex;
    justify-content: center;

    > div {
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      width: 46rem;
      height: 27rem;
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

  > img {
    width: 8rem;
    position: absolute;
    top: 24rem;
    left: 2rem;
  }

  main {
    background: ${({ theme }) => theme.COLORS.WHITE};
    height: 100%;
    padding-bottom: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15rem;
    position: relative;

    .buttonMain {
      width: 25rem;
      box-shadow: 0px 2px 16px 1px rgba(0, 0, 0, 0.15);
      border-radius: 2rem;
      transition: 0.1s;
      animation: animateToRight 0.5s forwards;
      text-transform: uppercase;
      padding-top: 1rem;

      div {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 25rem;
        height: 20rem;
      }

      p {
        background-color: ${({ theme }) => theme.COLORS.PURPLE};
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 1.4rem;
        font-weight: 700;
        padding: 1rem;
        border-radius: 0 0 1.5rem 1.5rem;
      }

      &:hover, &:focus, &:focus-visible {
        box-shadow: 0px 0px 1px 1.5px ${({ theme }) => theme.COLORS.PURPLE};
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