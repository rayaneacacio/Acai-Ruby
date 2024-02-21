import { ReactElement } from "react";

import { SvgCard } from "../../assets/svgs/card";
import { SvgMoney } from "../../assets/svgs/money";

import { Button } from "../../components/Button";
import { ButtonBack } from "../../components/ButtonBack";

import { Container } from "./style";

export function PaymentOptions(): ReactElement {
  return (
    <Container>
      <h1>ESCOLHA UMA DAS OPÇÕES ABAIXO ;)</h1>

      <div>
        <Button icon={ SvgCard() } text="CARTÃO" />
        <Button icon={ SvgMoney() } text="DINHEIRO" />
      </div>

      <ButtonBack />
    </Container>
  )
}