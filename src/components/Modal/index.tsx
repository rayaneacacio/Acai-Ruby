import { SvgCup } from "../../assets/svgs/cup";
import pngAcaiPremium from "../../assets/acai_premium.png";

import { Cup } from "../Cup";
import { ButtonBack } from "../../components/ButtonBack";
import { ButtonNext } from "../ButtonNext";

import { Container } from "./style";

export function Modal() {
  return (
    <Container>
      <div>
          <div>
            <SvgCup />
            <p>Tamanho</p>
          </div>

          <div className="divCups">
            <button> <Cup img={ pngAcaiPremium } quantity="200" si="ML" price="6,00" /> </button>
            <button> <Cup img={ pngAcaiPremium } quantity="300" si="ML" price="8,00" /> </button>
            <button> <Cup img={ pngAcaiPremium } quantity="400" si="ML" price="10,00" /> </button>
            <button> <Cup img={ pngAcaiPremium } quantity="500" si="ML" price="12,00" /> </button>
            <button> <Cup img={ pngAcaiPremium } quantity="1L" price="20,00" /> </button>
          </div>

          <div>
            <div className="divPedido">
              <p>SELECIONADO</p>
              <Cup img={ pngAcaiPremium } quantity="500" si="ML" price="12,00" />
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