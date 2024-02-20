import { ReactElement } from "react";

import SvgArrowToLeft from "../../assets/arrowToLeft.svg";
import { Container } from "./style";

export function ButtonNext(): ReactElement {
  return (
    <Container className="buttonNext">
      <p>CONTINUAR</p>
      <img src={ SvgArrowToLeft } alt="" />
    </Container>
  )
}