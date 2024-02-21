import { ReactElement } from "react";

import { SvgCremes } from "../../assets/svgs/cremes";
import { SvgComplementos } from "../../assets/svgs/complementos";
import { SvgCoberturas } from "../../assets/svgs/coberturas";
import { SvgExtras } from "../../assets/svgs/extras";
import { SvgCheckMark } from "../../assets/svgs/checkmark";
import { SvgView } from "../../assets/svgs/view";
import { SvgMinus } from "../../assets/svgs/minus";
import { SvgPlus } from "../../assets/svgs/plus";
import pngAcaiPremium from "../../assets/acai_premium.png";

import { Ingredients } from "../../components/Ingredients";
import { ButtonBack } from "../../components/ButtonBack";
import { ButtonNext } from "../../components/ButtonNext";

import { Container } from "./style";

export function Order(): ReactElement {
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
          <img src={ pngAcaiPremium } alt="" />
          <p><strong>AÇAÍ PREMIUM</strong></p>
          <p>500 ML</p>
        </div>

        <div className="recibo">
          <button>
            <p>VISUALIZAR</p>
            <SvgView />
          </button>

          <div>
            <p>
              <span><strong>1x Açaí Premium</strong></span>
              <span><strong>R$ 12,00</strong></span>
            </p>

            <p>
              <span>Tamanho: <strong>1x 500ml</strong></span>
              <span><strong>Subtotal:</strong> R$ 12,00</span>
            </p>

            <p><span>Cremes: <strong>1x Cupuaçu</strong></span></p>

            <p>
              <span>Complementos: <strong>1x Leite em Pó...</strong></span>
              <span><strong>Total:</strong> R$ 12,00</span>
            </p>
          </div>
        </div>

        <div>
          <div>
            <div className="divButtonsCount">
              <button><SvgMinus /></button>
              <span>1</span>
              <button><SvgPlus /></button>
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