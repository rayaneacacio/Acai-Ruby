import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    border: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  #root {
    width: 100vw;
    height: 100vh;
  }

  body {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_GRADIENT};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
    font-size: 1.8rem;
    overflow-x: hidden;
    height: -webkit-fill-available;

    &::-webkit-scrollbar {
      background: ${({ theme }) => theme.COLORS.PURPLE};;
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.PURPLE_22};
      border-radius: 2px;
    }
  }

  h1, h2 {
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
    font-size: 2.8rem;
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.GREEN};
  }

  button {
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
    background: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2rem;
    font-weight: 300;
    cursor: pointer;
    transition: 0.3s;
    outline: ${({ theme }) => theme.COLORS.WHITE};
  }

  button:hover {
    filter: brightness(0.7);
  }

  dialog {
    background: rgba(8, 8, 8, 0.64);
    color: ${({ theme }) => theme.COLORS.PURPLE};
    width: 100%;
    height: 100%;
    position: fixed;
    inset: 0;
    z-index: 1;
  }

  @keyframes animateToTop {
    from {
      height: 5rem;
    }
    to {
      height: 25rem;
    }
  }

  @keyframes animateToBottom {
    from {
      height: 25rem;
    }
    to {
      height: 1rem;
      transform: translateY(2rem);
    }
  }

  @keyframes animateToRight {
    from {
      transform: translateX(-5rem);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes animateOpacity {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes animateBackgroundOpacity {
    0% {
      background-color: rgba(8, 8, 8, 0.64);
    }
    50% {
      background-color: rgba(30,30,30,0.44254198261335786);
    }
    100% {
      background-color: transparent;
    }
  }
`;