import { ReactElement } from "react";

import svgFood from "../../assets/food.svg";
import svgBox from "../../assets/box.svg";

import { Button } from "../../components/Button";
import { ButtonBack } from "../../components/ButtonBack";

import { Container } from "./style";

export function ServiceOptions(): ReactElement {
  return (
    <Container>
      <h1>ESCOLHA UMA DAS OPÇÕES ABAIXO ;)</h1>

      <div>
        <Button icon={ svgFood } text="PARA COMER AQUI" />
        <Button icon={ svgBox } text="PARA LEVAR" />
      </div>

      <ButtonBack />
    </Container>
  )
}