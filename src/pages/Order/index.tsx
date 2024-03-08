import { ReactElement, useState } from "react";

import { SvgCremes } from "../../assets/svgs/cremes";
import { SvgComplementos } from "../../assets/svgs/complementos";
import { SvgCoberturas } from "../../assets/svgs/coberturas";
import { SvgExtras } from "../../assets/svgs/extras";
import { SvgCheckMark } from "../../assets/svgs/checkmark";
import { SvgView } from "../../assets/svgs/view";
import { SvgMinus } from "../../assets/svgs/minus";
import { SvgPlus } from "../../assets/svgs/plus";

import { Ingredients } from "../../components/Ingredients";
import { ButtonBack } from "../../components/ButtonBack";
import { ButtonNext } from "../../components/ButtonNext";

import { Container } from "./style";
import { usePedido } from "../../hook/pedido";

export function Order(): ReactElement {
  const { pedido } = usePedido();
  const [ count, setCount ] = useState<number>(1);
  
  return (
    <Container>
      <div>
        <h1>ESCOLHA SEUS <strong>COMPONENTES</strong></h1>
        <div>
          <h1>CREMES</h1>
          <p>ESCOLHA ATÉ 1</p>
        </div>
      </div>

      <div className="divSvgs">
        <div><SvgCremes /></div>
        <div><SvgComplementos /></div>
        <div><SvgCoberturas /></div>
        <div><SvgExtras /></div>
      </div>

      <Ingredients />

      <div>
        <div className="pedido">
          <SvgCheckMark />
          {
            pedido.name != undefined &&
            <>
              <img src={ pedido.image } alt="" />
              <p><strong>{ pedido.name }</strong></p>
              <p>{ pedido.size }</p>
            </>
          }
        </div>

        <div className="recibo">
          <button>
            <p>VISUALIZAR</p>
            <SvgView />
          </button>

          <div>
            {
              pedido.name != undefined &&
              <>
                <p>
                  <span><strong>{ pedido.name }</strong></span>
                  <span><strong>{ pedido.size }</strong></span>
                </p>

                <p>
                  <span>Tamanho: <strong>{ pedido.size }</strong></span>
                  <span><strong>Subtotal:</strong>{ pedido.initialPrice }</span>
                </p>

                <p>
                  <span></span>
                  <span><strong>Total:</strong>{ pedido.totalPrice }</span>
                </p>
              </>
            }
          </div>
        </div>

        <div>
          <div>
            <div className="divButtonsCount">
              <button onClick={() => setCount(count-1) } ><SvgMinus /></button>
              <span>{ count }</span>
              <button onClick={() => setCount(count+1) }><SvgPlus /></button>
            </div>

            <p>CUPUAÇU</p>
          </div>

          <div className="divButtonsBackAndNext">
            <ButtonBack />
            <ButtonNext />
          </div>
        </div>
      </div>
    </Container>
  )
}