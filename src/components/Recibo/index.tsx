import { ReactElement } from "react";
import { Container } from "./style";
import { usePedido } from "../../hook/pedido";

export function Recibo(): ReactElement {
  const { pedido } = usePedido();

  function handleCloseModalRecibo(): void {
    (document.querySelector(".modalRecibo")! as HTMLDialogElement).style.display = "none";
  }

  return (
    <Container className="modalRecibo">
      {
        pedido &&
        <div>
          <button onClick={ handleCloseModalRecibo }>FECHAR</button>
          
          <p>
            <span><strong>{ pedido.name }</strong></span>
            <span><strong>{ pedido.size }</strong></span>
          </p>

          <p>
            <span>Consumo:</span>
            <span>{ pedido.servico }</span>
          </p> 

          <p>
            <span>Forma de pagamento:</span>
            <span>{ pedido.pagamento }</span>
          </p> 

          <p>
            <span>Tamanho: <strong>{ pedido.size }</strong></span>
            <span><strong>Subtotal: </strong>{ pedido.initialPrice }</span>
          </p>

          {
            pedido.acaiComponents && pedido.acaiComponents.creme &&
            <p>
              <span>Creme: <strong>{ pedido.acaiComponents.creme }</strong></span>
            </p>
          }

          {
            pedido.acaiComponents && pedido.acaiComponents.complementos && 
            pedido.acaiComponents.complementos.length > 0 &&
            <p>
              <span>Complementos: 
                { 
                  pedido.acaiComponents.complementos.map((acaiComplemento: string, index: number) => (
                    <strong key={ index }> { acaiComplemento },</strong>
                  ))
                }
              </span>
            </p>
          }

          {
            pedido.acaiComponents && pedido.acaiComponents.cobertura && 
            pedido.acaiComponents.cobertura.length > 0 &&
            <p>
              <span>Cobertura: <strong>{ pedido.acaiComponents.cobertura }</strong></span>
            </p>
          }

          {
            pedido.acaiComponents && pedido.acaiComponents.extras &&
            <>
              <p><span>Extras: </span></p>
              { 
                pedido.acaiComponents.extras.map((acaiComplemento: { name: string, amount: number }, index: number) => (
                  <p key={ index } className="componentsExtras"> 
                    <strong>{ acaiComplemento.amount }x { acaiComplemento.name }</strong>
                    R$ { String(acaiComplemento.amount * 1.99).replace(".", ",") }
                  </p>
                ))
              }
            </>
          }

          <p>
            <span></span>
            <span><strong>Total: </strong>{ pedido.totalPrice }</span>
          </p> 
      </div>
      }
    </Container>
  )
}