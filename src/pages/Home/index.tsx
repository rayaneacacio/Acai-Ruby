import { ReactElement } from "react";

import pngAcai1 from "../../assets/acai1.png";
import pngAcai2 from "../../assets/acai2.png";

import { Container } from "./style";

export function Home(): ReactElement {
  return (
    <Container>
      <main>
        <div>
          <h1>AÇAÍ PLUS</h1>
          <h2>SUPER PROMOÇÃO</h2>
        </div>

        <div>
          <p>50%</p>
          <p> DE DESCONTO EM TODA LINHA</p>
        </div>

        <img src={ pngAcai1 } alt="" />
        <img src={ pngAcai2 } alt="" />
      </main>

      <button>TOQUE PARA INICIAR</button>
    </Container>
  )
}