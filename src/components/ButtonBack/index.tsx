import { ReactElement } from "react";
import { SvgArrowToRight } from "../../assets/svgs/arrowToRight";

import { Container } from "./style";

export function ButtonBack(): ReactElement {
  return (
    <Container className="buttonBack">
      <SvgArrowToRight />
      <p>VOLTAR</p>
    </Container>
  )
}