import { ReactElement } from "react";

import SvgArrowToRight from "../../assets/arrowToRight.svg";
import { Container } from "./style";

export function ButtonBack(): ReactElement {
  return (
    <Container>
      <img src={ SvgArrowToRight } alt="" />
      <p>VOLTAR</p>
    </Container>
  )
}