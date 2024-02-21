import { ReactElement } from "react";

import { SvgArrowToLeft } from "../../assets/svgs/arrowToLeft";
import { Container } from "./style";

export function ButtonNext(): ReactElement {
  return (
    <Container className="buttonNext">
      <p>CONTINUAR</p>
      <SvgArrowToLeft />
    </Container>
  )
}