import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { SvgArrowToRight } from "../../assets/svgs/arrowToRight";

import { Container } from "./style";

export function ButtonBack(props: { onClick?: () => void }): ReactElement {
  const navigate = useNavigate();

  function handleNavigateBack() {
    navigate(-1);
  }

  return (
    <Container className="buttonBack" onClick={ props.onClick ?? handleNavigateBack }>
      <SvgArrowToRight />
      <p>VOLTAR</p>
    </Container>
  )
}