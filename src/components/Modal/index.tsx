import { SvgCup } from "../../assets/svgs/cup";
import { useNavigate } from "react-router-dom";

import { Cup } from "../Cup";
import { ButtonBack } from "../../components/ButtonBack";
import { ButtonNext } from "../ButtonNext";

import { Container } from "./style";

export function Modal(props: { image: string }) {
  const navigate = useNavigate();

  function handleCloseDialogPedido(): void {
    const dialog: HTMLDialogElement = document.querySelector(".dialogPedido")!;
    const dialogDiv = dialog.querySelector("div")!;

    dialog.style.animation = "animateBackgroundOpacity 0.3s linear forwards";
    dialogDiv.style.animation = "animateToBottom 0.3s forwards";

    setTimeout((): void => {
      dialog.style.display = "none";
      dialog.style.animation = "none";
      dialogDiv.style.animation = "animateToTop 0.3s forwards";
    }, 300);
  }

  function handleNavigateOrder(): void {
    navigate("/order");
  }

  return (
    <Container className="dialogPedido">
      <div>
          <div>
            <SvgCup />
            <p>Tamanho</p>
          </div>

          <div className="divCups">
            <button> <Cup img={ props.image } quantity="200" si="ML" price="6,00" /> </button>
            <button> <Cup img={ props.image } quantity="300" si="ML" price="8,00" /> </button>
            <button> <Cup img={ props.image } quantity="400" si="ML" price="10,00" /> </button>
            <button> <Cup img={ props.image } quantity="500" si="ML" price="12,00" /> </button>
            <button> <Cup img={ props.image } quantity="1L" price="20,00" /> </button>
          </div>

          <div>
            <div className="divPedido">
              <p>SELECIONADO</p>
              <Cup img={ props.image } quantity="500" si="ML" price="12,00" />
            </div>

            <div className="divButtonsBackAndNext">
              <ButtonBack onClick={ handleCloseDialogPedido } />
              <ButtonNext onClick={ handleNavigateOrder } />
            </div>
          </div>
        </div>
    </Container>
  )
}