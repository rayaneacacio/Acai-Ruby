import styled from "styled-components";
import imgCremesBanner from "../../assets/cremesBanner.png";
import imgAcaiBanner from "../../assets/acaiBanner.png";
import imgLogo from "../../assets/logo.png";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  animation: animateOpacity 1s forwards ease;

  header {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_GRADIENT};
    text-align: center;
    height: 15rem;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
    z-index: 1;
    display: flex;
    justify-content: center;

    > div {
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }

    p {
      display: none;
    }
  }

  main {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 10rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5rem;

    button {
      width: 17rem;
      height: 17rem;
      box-shadow: 0px 2px 16px 1px rgba(0, 0, 0, 0.15);
      border-radius: 2rem;
      transition: 0.1s;
      animation: animateToRight 0.5s forwards;
      text-transform: uppercase;

      div {
        width: 100%;
        height: 12rem;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        margin-bottom: 3rem;
      }

      p {
        background-color: ${({ theme }) => theme.COLORS.PURPLE};
        color: ${({ theme }) => theme.COLORS.WHITE};
        width: 100%;
        font-size: 1.4rem;
        font-weight: 700;
        padding: 1rem;
        border-radius: 0 0 1.5rem 1.5rem;
        position: fixed;
        bottom: 0;
      }

      &:hover, &:focus, &:focus-visible {
        box-shadow: 0px 0px 1px 1.5px ${({ theme }) => theme.COLORS.PURPLE};
      }
    }
  }

  @media(min-width: 700px) {
    header {
      height: 18rem;

      p {
        display: block;
        font-weight: 200;
        position: absolute;
        bottom: 6rem;
        right: 3rem;
        padding: 0.5rem 1rem;
        border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
        border-radius: 7px;
      }
    }

    main {
      flex-direction: row;
    }

    main button {
      width: 20rem;
      height: 20rem;

      > div {
        height: 15rem;
      }
    }
  }

  .buttonBack svg path {
    fill: white;
  }

  @media(min-width: 1000px) {
    header {
      height: 20rem;
    }

    header p {
      font-size: 3rem;
      right: 5rem;
    }

    main {
      padding: 15rem 0 1rem;
      gap: 10rem;
    }

    main button {
      width: 28rem;
      height: 28rem;

      div{
        height: 23rem;
      }
    }
  }
`;

export const ImgCremes = styled.div`
  display: none;

  @media(min-width: 700px) {
    display: block;
    background-image: url(${ imgCremesBanner });
    width: 30rem;
    height: 12rem;
    position: absolute;
    bottom: 1rem;
    left: -7rem;
  }

  @media(min-width: 1000px) {
    width: 40rem;
    height: 19rem;
    left: -9rem;
  }
`;

export const AcaiBanner = styled.div`
  background-image: url(${ imgAcaiBanner });
  width: 30rem;
  height: 20rem;
  margin: 0 2rem;

  @media(min-width: 700px) {
    width: 35rem;
    height: 25rem;
  }

  @media(min-width: 1000px) {
    width: 40rem;
    height: 29rem;
  }
`;

export const Logo = styled.div`
  background-image: url(${ imgLogo });
  width: 7rem;
  height: 4rem;
  position: absolute;
  top: 17rem;
  left: 2rem;

  @media(min-width: 700px) {
    top: 19rem;
  }

  @media(min-width: 1000px) {
    top: 21rem;
    width: 9rem;
    height: 6rem;
  }
`;