import { SvgCup } from "../../assets/svgs/cup";
import { useNavigate } from "react-router-dom";

import { Cup } from "../Cup";
import { ButtonBack } from "../../components/ButtonBack";
import { ButtonNext } from "../ButtonNext";

import { Container } from "./style";
import { useAcaiSizes } from "../../hook/acaiSizes";
import { useEffect } from "react";
import { usePedido } from "../../hook/pedido";

export function Modal(props: { image: string }) {
  const { allAcaiSizes, findAllSizes } = useAcaiSizes();
  const { pedido, insertPedido } = usePedido();
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
    if(pedido.size != undefined && pedido.initialPrice != undefined) {
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
                <button key={ index } onClick={() => 
                  insertPedido({ size: acaiSize.size, initialPrice: acaiSize.price })
                }> 
                  <Cup img={ props.image } quantity={ acaiSize.size } price={ acaiSize.price } />
                </button>
              ))
            }
          </div>

          <div>
            <div className="divPedido">
              <p>SELECIONADO</p>
              <div>
                {
                  pedido.size != undefined && pedido.initialPrice != undefined ?
                  <Cup img={ props.image } quantity={ pedido.size } price={ pedido.initialPrice } />
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