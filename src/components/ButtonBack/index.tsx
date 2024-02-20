import { ReactElement } from "react";

import svgArrowToRight from "../../assets/arrowToRight.svg";
import { Container } from "./style";

export function ButtonBack(): ReactElement {
  return (
    <Container>
      <img src={ svgArrowToRight } alt="" />
      <p>VOLTAR</p>
    </Container>
  )
}