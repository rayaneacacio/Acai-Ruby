import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

import { SvgCard } from "../../assets/svgs/card";
import { SvgMoney } from "../../assets/svgs/money";

import { Button } from "../../components/Button";
import { ButtonBack } from "../../components/ButtonBack";

import { Container } from "./style";

export function PaymentOptions(): ReactElement {
  const navigate = useNavigate();

  function handleNavigateMenu() {
    navigate("/menu");
  }

  return (
    <Container>
      <h1>ESCOLHA UMA DAS OPÇÕES ABAIXO ;)</h1>

      <div>
        <Button icon={ SvgCard() } text="CARTÃO" onClick={ handleNavigateMenu } />
        <Button icon={ SvgMoney() } text="DINHEIRO" onClick={ handleNavigateMenu } />
      </div>

      <ButtonBack />
    </Container>
  )
}