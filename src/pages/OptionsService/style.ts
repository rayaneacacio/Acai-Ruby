import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  width: 100%;
  height: 100vh;
  max-height: 100vh;

  main {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_GRADIENT};
    position: relative;
    padding-bottom: 15rem;
  }

  main > h1 {
    padding: 5rem 2rem;
  }

  main > div:first-of-type {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
  }

  @media(min-width: 1000px) {
    main {
      min-height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 5rem;
    }

    main > div:first-of-type {
      width: 100%;
      flex-direction: row;
      justify-content: space-evenly;
      gap: 1rem;
    }
  }
`;