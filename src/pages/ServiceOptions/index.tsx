import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

import { SvgFood } from "../../assets/svgs/food";
import { SvgBox } from "../../assets/svgs/box";

import { Button } from "../../components/Button";
import { ButtonBack } from "../../components/ButtonBack";

import { Container } from "./style";

export function ServiceOptions(): ReactElement {
  const navigate = useNavigate();

  function handleNavigatePaymentOptions() {
    navigate("/payment");
  }

  return (
    <Container>
      <h1>ESCOLHA UMA DAS OPÇÕES ABAIXO ;)</h1>

      <div>
        <Button icon={ SvgFood() } text="PARA COMER AQUI" onClick={ handleNavigatePaymentOptions } />
        <Button icon={ SvgBox() } text="PARA LEVAR" onClick={ handleNavigatePaymentOptions } />
      </div>

      <ButtonBack />
    </Container>
  )
}