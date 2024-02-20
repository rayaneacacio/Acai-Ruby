import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.PURPLE};
  padding: 0.5rem 1rem;
  border-radius: 10rem;
  box-shadow: ${({ theme }) => theme.COLORS.SHADOW};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  position: absolute;
  bottom: 5rem;
  right: 10rem;

  p {
    font-size: 1.6rem;
    font-weight: 500;
  }
`;