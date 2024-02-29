import { ReactElement, useEffect, useState } from "react";

import cremesBanner from "../../assets/cremesBanner.png"
import acaiBanner from "../../assets/acaiBanner.png";
import imgLogo from "../../assets/logo.png";
import pngAcai from "../../assets/acai_option_menu.png";
import pngMilkshake from "../../assets/milkshake_option_menu.png";
import pngBebidas from "../../assets/bebidas_option_menu.png";
import pngAcaiPremium from "../../assets/acai_premium.png";
import pngAcaiTradicional from "../../assets/acai_tradicional.png";

import milkshake from "../../assets/milkshake.png";
import cocaCola from "../../assets/coca_cola.png";

import { ButtonBack } from "../../components/ButtonBack";
import { Modal } from "../../components/Modal";

import { Container } from "./style";

interface IProduct {
  name: string,
  category: string,
  image: string,
}

export function Menu(): ReactElement {
  const contentAcai: IProduct[] = [
    {
      name: "AÇAÍ PREMIUM",
      category: "açaí",
      image: pngAcaiPremium,
    },
    {
      name: "AÇAÍ TRADICIONAL",
      category: "açaí",
      image: pngAcaiTradicional,
    }
  ];

  const [ imgPedido, setImgPedido ] = useState<string>("");
  const [ productsByCategory, setProductsByCategory ] = useState<IProduct[]>(contentAcai);

  function handleOpenDialogPedido(img: string): void {
    setImgPedido(img);

    const dialog: HTMLDialogElement = document.querySelector(".dialogPedido")!;
    dialog.style.display = "block";
  }

  async function handleContentMain(buttonChosen: HTMLButtonElement, category: string): Promise<void> {
    handleButtonOnFocus(buttonChosen);

    if(category == "açaí") {
      setProductsByCategory(contentAcai);
    } else if(category == "milkshake") {
        const contentMilkshake: IProduct = {
          name: "milkshake gostoso",
          category: "milkshake",
          image: milkshake
        };

        setProductsByCategory([contentMilkshake]);
    } else if(category == "bebida") {
      const contentBebida: IProduct = {
        name: "coca cola",
        category: "bebida",
        image: cocaCola
      };

      setProductsByCategory([contentBebida]);
    };
  }

  function handleButtonOnFocus(buttonChosen: HTMLButtonElement): void {
    const buttonsOptions: HTMLButtonElement[] = Array.from(document.querySelectorAll(".options button"));

    buttonsOptions.map((btn: HTMLButtonElement): void => {
      btn.classList.remove("buttonOnFocus");
    });

    buttonChosen.focus();
    buttonChosen.classList.add("buttonOnFocus");
  }

  useEffect((): void => {
    const firstbuttonsOptions: HTMLButtonElement = Array.from(document.querySelectorAll(".options button"))[0] as HTMLButtonElement;

    if(firstbuttonsOptions) {
      handleButtonOnFocus(firstbuttonsOptions);
    }

  }, []);

  return (
    <Container>
      <header>
        <img src={ cremesBanner } alt="" />
        <img src={ acaiBanner } alt="" />
        <p>COMPRE AQUI!</p>
      </header>

      <div className="options">
        <img src={ imgLogo } alt="" />

        <button onClick={(event) => handleContentMain(event.currentTarget, "açaí")}>
          <img src={ pngAcai } alt="" />
          <p>AÇAÍ</p>
        </button>

        <button onClick={(event) => handleContentMain(event.currentTarget, "milkshake")}>
          <img src={ pngMilkshake } alt="" />
          <p>MILKSHAKE</p>
        </button>

        <button onClick={(event) => handleContentMain(event.currentTarget, "bebida")}>
          <img src={ pngBebidas } alt="" />
          <p>BEBIDAS</p>
        </button>
      </div>

      <main>
        {
          productsByCategory &&
          productsByCategory.map((product: IProduct, index: number) => (
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