import styled from "styled-components";

export const Container = styled.dialog`
  font-size: 1.6rem;
  font-weight: 500;

  > div {
    background: ${({ theme }) => theme.COLORS.WHITE};
    width: 90%;
    height: 90%;
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
    padding: 5px 0 0;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
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

  @media(min-width: 500px) {
    > div {
      width: 45rem;
      height: 80%;
      padding: 5rem 2rem 0; 
    }
  }
`;