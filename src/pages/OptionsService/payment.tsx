import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

import { SvgCard } from "../../assets/svgs/card";
import { SvgMoney } from "../../assets/svgs/money";

import { Button } from "../../components/Button";
import { ButtonBack } from "../../components/ButtonBack";

import { Container } from "./style";
import { usePedido } from "../../hook/pedido";

export function PaymentOptions(): ReactElement {
  const { insertPedido } = usePedido();
  const navigate = useNavigate();

  function handleNavigateMenu(formaDePagamento: string): void {
    insertPedido({ pagamento: formaDePagamento });
    navigate("#");
  }

  return (
    <Container>
      <main>
        <h1>ESCOLHA UMA DAS OPÇÕES ABAIXO ;)</h1>

        <div>
          <Button icon={ SvgCard() } text="CARTÃO" onClick={() => handleNavigateMenu("cartão") } />
          <Button icon={ SvgMoney() } text="DINHEIRO" onClick={() => handleNavigateMenu("dinheiro") } />
        </div>

        <ButtonBack />
      </main>
    </Container>
  )
}