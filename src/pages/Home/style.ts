import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  text-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  main {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6rem;
    position: relative;
  }

  h1 {
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: 2rem;
    text-align: center;
  }

  h2 {
    font-size: 6rem;
    letter-spacing: 4px;
  }

  main p:first-of-type {
    font-size: 13rem;
    font-weight: 700;
    text-align: center;
  }

  main p:last-of-type {
    background-color: ${({ theme }) => theme.COLORS.YELLOW};
    color: ${({ theme }) => theme.COLORS.PURPLE};
    font-weight: 600;
    letter-spacing: 4px;
    padding: 0 2.5rem;
  }

  main img {
    width: 40rem;
    position: absolute;
    bottom: 0;
  }

  main img:first-of-type {
    left: -30rem;
  }

  main img:last-of-type {
    right: -30rem;
  }

  button {
    background: radial-gradient(circle, rgba(0,0,0,0.6638304980195203) 0%, rgba(0,0,0,0.25486691258534666) 100%);
    font-size: 3rem;
    font-weight: 700;
    width: 100%;
    font-size: 5rem;
    padding: 1.5rem 0;
  }
`;