import { ReactElement, useState } from "react";

import cremesBanner from "../../assets/cremesBanner.png"
import acaiBanner from "../../assets/acaiBanner.png";
import imgLogo from "../../assets/logo.png";
import pngAcaiPremium from "../../assets/acai_premium.png";
import pngAcaiTradicional from "../../assets/acai_tradicional.png";

import { ButtonBack } from "../../components/ButtonBack";
import { Modal } from "../../components/Modal";

import { Container } from "./style";
import { usePedido } from "../../hook/pedido";

interface IProduct {
  name: string,
  image: string,
}

export function Menu(): ReactElement {
  const { insertPedido } = usePedido();
  const contentAcai: IProduct[] = [
    {
      name: "AÇAÍ PREMIUM",
      image: pngAcaiPremium,
    },
    {
      name: "AÇAÍ TRADICIONAL",
      image: pngAcaiTradicional,
    }
  ];

  const [ imgPedido, setImgPedido ] = useState<string>("");

  function handlePedido(product: IProduct): void {
    const dialog: HTMLDialogElement = document.querySelector(".dialogPedido")!;
    dialog.style.display = "block";

    setImgPedido(product.image);
    insertPedido({ name: product.name, image: product.image });
  }

  return (
    <Container>
      <header>
        <img src={ cremesBanner } alt="" />
        <img src={ acaiBanner } alt="" />
        <p>COMPRE AQUI!</p>
      </header>

      <img src={ imgLogo } alt="" />

      <main>
        {
          contentAcai &&
          contentAcai.map((product: IProduct, index: number) => (
            <button key={ index } className="buttonMain" onClick={() => handlePedido(product)}>
              <div style={{ backgroundImage: `url(${product.image})` }}></div>
              <p>{ product.name }</p>
            </button>
          ))
        }

        <ButtonBack />
      </main>

      <Modal image={ imgPedido } />
    </Container>
  )
}