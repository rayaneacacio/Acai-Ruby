import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h1 {
    height: 10%;
    padding: 5rem 0 6rem;
  }

  > div {
    width: 100%;
    height: 55%;
    display: flex;
    justify-content: space-evenly;
  }
`;