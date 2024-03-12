import styled from "styled-components";

export const Container = styled.dialog`
  color: ${({ theme }) => theme.COLORS.PURPLE};
  font-size: 1.6rem;
  font-weight: 500;

  > div {
    background: ${({ theme }) => theme.COLORS.WHITE};
    width: 40rem;
    height: 70%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1rem;
    padding-top: 5rem;
    border: 2px dashed ${({ theme }) => theme.COLORS.PURPLE};
    box-shadow: ${({ theme }) => theme.COLORS.SHADOW_SUAVE};
    position: relative;
    overflow-y: auto;
  }

  p {
    padding: 5px 2rem 0;
    display: flex;
    justify-content: space-between;
  }

  p:first-of-type {
    border-bottom: 2px dashed ${({ theme }) => theme.COLORS.PURPLE};
    padding: 1rem 2rem;
  }

  p:last-of-type {
    padding-top: 2rem;
  }

  .componentsExtras {
    padding-left: 5rem;
  }

  button {
    color: ${({ theme }) => theme.COLORS.PURPLE};
    font-size: 1.7rem;
    font-weight: bold;
    padding: 5px 1rem;
    border-radius: 2rem;
    position: absolute;
    top: 1rem;
    right: 0;
  }
`;