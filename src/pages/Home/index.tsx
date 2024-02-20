import { ReactElement } from "react";
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
      </main>
      <button>TOQUE PARA INICIAR</button>
    </Container>
  )
}