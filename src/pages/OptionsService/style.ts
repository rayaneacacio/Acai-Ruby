import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_GRADIENT};
  text-align: center;
  width: 100%;
  height: 100vh;
  max-height: 100vh;

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

  main > div:last-of-type {
    padding: 5rem 0 10rem;
    position: relative;
  }

  @media(min-width: 1000px) {
    main {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 5rem;
    }

    main > div:first-of-type {
      width: 100%;
      flex-direction: row;
      justify-content: space-evenly;
      gap: 1rem;
    }

    main > div:last-of-type {
      padding: 5rem 0 1rem;
    }
  }
`;