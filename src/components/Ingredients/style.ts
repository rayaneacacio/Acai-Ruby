import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 8%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5rem;

  button {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-size: 2.5rem;
    font-weight: 700;
    width: 20rem;
    padding: 5px 1rem;
    border: 1px solid;
    border-radius: 1.5rem;

    &:hover, &:focus, &:focus-visible {
      background-color: ${({ theme }) => theme.COLORS.WHITE};
      color: ${({ theme }) => theme.COLORS.PURPLE};
    }
  }
`;