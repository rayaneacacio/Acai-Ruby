import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10rem;

  > div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
`;