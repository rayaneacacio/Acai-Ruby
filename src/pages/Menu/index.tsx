import { ReactElement, useState } from "react";

import cremesBanner from "../../assets/cremesBanner.png"
import acaiBanner from "../../assets/acaiBanner.png";
import imgLogo from "../../assets/logo.png";
import pngAcaiPremium from "../../assets/acai_premium.png";
import pngAcaiTradicional from "../../assets/acai_tradicional.png";

import { ButtonBack } from "../../components/ButtonBack";
import { Modal } from "../../components/Modal";

import { Container } from "./style";
import { useAcaiSizes } from "../../hook/acaiSizes";

interface IProduct {
  name: string,
  image: string,
}

export function Menu(): ReactElement {
  const { setSizeSelected } = useAcaiSizes();
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

  function handleOpenDialogPedido(img: string): void {
    setImgPedido(img);

    const dialog: HTMLDialogElement = document.querySelector(".dialogPedido")!;
    dialog.style.display = "block";
    setSizeSelected({ id: 0, size: "", price: "" });
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
            <button key={ index } className="buttonMain" onClick={() => handleOpenDialogPedido(product.image)}>
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