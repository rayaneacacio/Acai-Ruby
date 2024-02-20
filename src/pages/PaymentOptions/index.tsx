import { ReactElement } from "react";

import svgCard from "../../assets/card.svg";
import svgMoney from "../../assets/money.svg";

import { Button } from "../../components/Button";
import { ButtonBack } from "../../components/ButtonBack";

import { Container } from "./style";

export function PaymentOptions(): ReactElement {
  return (
    <Container>
      <h1>ESCOLHA UMA DAS OPÇÕES ABAIXO ;)</h1>

      <div>
        <Button icon={ svgCard } text="CARTÃO" />
        <Button icon={ svgMoney } text="DINHEIRO" />
      </div>

      <ButtonBack />
    </Container>
  )
}