import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

import pngAcai1 from "../../assets/acai1.png";
import pngAcai2 from "../../assets/acai2.png";

import { Container } from "./style";

export function Home(): ReactElement {
  const navigate = useNavigate();

  function handleNavigateServiceOptions() {
    navigate("/services");
  }

  return (
    <Container>
      <main>
        <div>
          <div>
            <h1>AÇAÍ RUBY</h1>
            <h2>SUPER PROMOÇÃO</h2>
          </div>

          <div className="divImgs">
            <div className="imgAcai" style={{ backgroundImage: `url(${ pngAcai1 })` }} />
            
            <div>
              <p>50%</p>
              <p> DE DESCONTO EM TODA LINHA</p>
            </div>
            
            <div className="imgAcai" style={{ backgroundImage: `url(${ pngAcai2 })` }} />
          </div>
        </div>
      </main>

      <button onClick={ handleNavigateServiceOptions }>TOQUE PARA INICIAR</button>
    </Container>
  )
}