import { ReactElement, useState } from "react";

import cremesBanner from "../../assets/cremesBanner.png"
import acaiBanner from "../../assets/acaiBanner.png";
import imgLogo from "../../assets/logo.png";
import pngAcai from "../../assets/acai_option_menu.png";
import pngMilkshake from "../../assets/milkshake_option_menu.png";
import pngBebidas from "../../assets/bebidas_option_menu.png";
import pngAcaiPremium from "../../assets/acai_premium.png";
import pngAcaiTradicional from "../../assets/acai_tradicional.png";

import { ButtonBack } from "../../components/ButtonBack";
import { Modal } from "../../components/Modal";

import { Container } from "./style";

export function Menu(): ReactElement {
  const [ imgPedido, setImgPedido ] = useState<string>("");

  function handleOpenDialogPedido(img: string): void {
    setImgPedido(img);

    const dialog: HTMLDialogElement = document.querySelector(".dialogPedido")!;
    dialog.style.display = "block";
  }

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
        <button className="buttonMain" onClick={() => handleOpenDialogPedido(pngAcaiPremium) }>
          <img src={ pngAcaiPremium } alt="" />
          <p>AÇAÍ PREMIUM</p>
        </button>

        <button className="buttonMain" onClick={() => handleOpenDialogPedido(pngAcaiTradicional) }>
          <img src={ pngAcaiTradicional } alt="" />
          <p>AÇAÍ TRADICIONAL</p>
        </button>

        <ButtonBack />
      </main>

      <Modal image={ imgPedido } />
    </Container>
  )
}