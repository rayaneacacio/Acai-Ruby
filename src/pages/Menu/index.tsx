import { ReactElement } from "react";

import cremesBanner from "../../assets/cremesBanner.png"
import acaiBanner from "../../assets/acaiBanner.png";
import imgLogo from "../../assets/logo.png";
import pngAcai from "../../assets/acai_option_menu.png";
import pngMilkshake from "../../assets/milkshake_option_menu.png";
import pngBebidas from "../../assets/bebidas_option_menu.png";
import pngAcaiPremium from "../../assets/acai_premium.png";
import pngAcaiTradicional from "../../assets/acai_tradicional.png";
import svgCup from "../../assets/cup.svg";

import { ButtonBack } from "../../components/ButtonBack";
import { ButtonNext } from "../../components/ButtonNext";
import { Cup } from "../../components/Cup";

import { Container } from "./style";

export function Menu(): ReactElement {
  return (
    <Container>
      <header>
        <img src={ cremesBanner } alt="" />
        <img src={ acaiBanner } alt="" />
        <p>COMPRE AQUI!</p>
      </header>

      <div className="options">
        <img src={ imgLogo } alt="" />

        <button>
          <img src={ pngAcai } alt="" />
          <p>AÇAÍ</p>
        </button>

        <button>
          <img src={ pngMilkshake } alt="" />
          <p>MILKSHAKE</p>
        </button>

        <button>
          <img src={ pngBebidas } alt="" />
          <p>BEBIDAS</p>
        </button>
      </div>

      <main>
        <button>
          <img src={ pngAcaiPremium } alt="" />
          <p>AÇAÍ PREMIUM</p>
        </button>

        <button>
          <img src={ pngAcaiTradicional } alt="" />
          <p>AÇAÍ TRADICIONAL</p>
        </button>
      </main>

      <ButtonBack />

      <dialog>
        <div>
          <div>
            <img src={ svgCup } alt="" />
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
      </dialog>
    </Container>
  )
}