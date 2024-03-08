import { SvgCup } from "../../assets/svgs/cup";
import { useNavigate } from "react-router-dom";

import { Cup } from "../Cup";
import { ButtonBack } from "../../components/ButtonBack";
import { ButtonNext } from "../ButtonNext";

import { Container } from "./style";
import { useAcaiSizes } from "../../hook/acaiSizes";
import { useEffect } from "react";

export function Modal(props: { image: string }) {
  const { allAcaiSizes, findAllSizes, setSizeSelected, sizeSelected } = useAcaiSizes();
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
    if(sizeSelected.id != 0) {
      navigate("/order");
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    (async() => findAllSizes(controller.signal))();

    return () => { 
      controller.abort();
    }

  }, []);

  return (
    <Container className="dialogPedido">
      <div>
          <div>
            <SvgCup />
            <p>Tamanho</p>
          </div>

          <div className="divCups">
            {
              allAcaiSizes?.map((acaiSize: { id: number, size: string, price: string }, index: number) => (
                <button key={ index } onClick={() => setSizeSelected(acaiSize) }> <Cup img={ props.image } quantity={ acaiSize.size } price={ acaiSize.price } /> </button>
              ))
            }
          </div>

          <div>
            <div className="divPedido">
              <p>SELECIONADO</p>
              <div>
                {
                  sizeSelected.id != 0 ?
                  <Cup img={ props.image } quantity={ sizeSelected.size } price={ sizeSelected.price } />
                  :
                  <p>selecione um tamanho</p>
                } 
              </div>
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