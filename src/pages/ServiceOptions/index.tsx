import { ReactElement } from "react";

import { SvgFood } from "../../assets/svgs/food";
import { SvgBox } from "../../assets/svgs/box";

import { Button } from "../../components/Button";
import { ButtonBack } from "../../components/ButtonBack";

import { Container } from "./style";

export function ServiceOptions(): ReactElement {
  return (
    <Container>
      <h1>ESCOLHA UMA DAS OPÇÕES ABAIXO ;)</h1>

      <div>
        <Button icon={ SvgFood() } text="PARA COMER AQUI" />
        <Button icon={ SvgBox() } text="PARA LEVAR" />
      </div>

      <ButtonBack />
    </Container>
  )
}