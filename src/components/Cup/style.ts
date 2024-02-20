import styled from "styled-components";

export const Container = styled.div`
  font-size: 1.6rem;
  text-align: center;
  width: 10rem;
  position: relative;

  img {
    width: 6rem;
  }

  div {
    background: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.PURPLE};
    font-weight: 800;
    width: 6rem;
    height: 6rem;
    box-shadow: 0.5px 2.5px 1px 1px ${({ theme }) => theme.COLORS.PURPLE};
    border-radius: 50%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: -1rem;
    top: 1rem;
  }

  > p {
    background: ${({ theme }) => theme.COLORS.PURPLE};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 600;
    text-align: center;
    padding: 2px 1rem;
    border-radius: 5px;
  }
`;