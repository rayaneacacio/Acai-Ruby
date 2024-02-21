import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.PURPLE};
  color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 0.5rem 1rem 0.5rem 1.5rem;
  border-radius: 10rem;
  box-shadow: ${({ theme }) => theme.COLORS.SHADOW_SUAVE};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  p {
    font-size: 1.6rem;
    font-weight: 500;
  }
`;