import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

import { SvgFood } from "../../assets/svgs/food";
import { SvgBox } from "../../assets/svgs/box";

import { Button } from "../../components/Button";
import { ButtonBack } from "../../components/ButtonBack";

import { Container } from "./style";
import { usePedido } from "../../hook/pedido";

export function ServiceOptions(): ReactElement {
  const { insertPedido } = usePedido();
  const navigate = useNavigate();

  function handleNavigatePaymentOptions(formaDeServico: string): void {
    insertPedido({ servico: formaDeServico });
    navigate("/payment");
  }

  return (
    <Container>
      <main>
        <h1>ESCOLHA UMA DAS OPÇÕES ABAIXO ;)</h1>

        <div>
          <Button icon={ SvgFood() } text="PARA COMER AQUI" onClick={() => handleNavigatePaymentOptions("para comer aqui") } />
          <Button icon={ SvgBox() } text="PARA LEVAR" onClick={() => handleNavigatePaymentOptions("para levar") } />
        </div>

        <div>
          <ButtonBack />
        </div>
      </main>      
    </Container>
  )
}