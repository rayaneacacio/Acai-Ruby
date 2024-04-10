import { ReactElement, useState } from "react";

import pngAcaiPremium from "../../assets/acai_premium.png";
import pngAcaiTradicional from "../../assets/acai_tradicional.png";

import { Modal } from "../../components/Modal";

import { AcaiBanner, Container, ImgCremes, Logo } from "./style";
import { usePedido } from "../../hook/pedido";

interface IProduct {
  name: string,
  image: string,
}

export function Home(): ReactElement {
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
        <ImgCremes />
        <AcaiBanner />
        <p>COMPRE AQUI!</p>
        <Logo />
      </header>

      <main>
        {
          contentAcai &&
          contentAcai.map((product: IProduct, index: number) => (
            <button key={ index } onClick={() => handlePedido(product)}>
              <div style={{ backgroundImage: `url(${product.image})` }}></div>
              <p>{ product.name }</p>
            </button>
          ))
        }
      </main>

      <Modal image={ imgPedido } />
    </Container>
  )
}