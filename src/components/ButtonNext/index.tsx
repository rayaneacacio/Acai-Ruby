import { ReactElement } from "react";

import { SvgArrowToLeft } from "../../assets/svgs/arrowToLeft";
import { Container } from "./style";

export function ButtonNext(props: { onClick?: () => void }): ReactElement {
  return (
    <Container className="buttonNext" onClick={ props.onClick }>
      <p>CONTINUAR</p>
      <SvgArrowToLeft />
    </Container>
  )
}