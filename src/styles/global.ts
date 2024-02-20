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

  body {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_GRADIENT};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
    font-size: 1.8rem;
    overflow: hidden;
  }

  h1, h2 {
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.YELLOW};
  }

  button {
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
    background: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    cursor: pointer;
  }

  button:hover {
    filter: brightness(0.8);
  }
`;