import { SvgCup } from "../../assets/svgs/cup";
import { useNavigate } from "react-router-dom";

import { Cup } from "../Cup";
import { ButtonBack } from "../../components/ButtonBack";
import { ButtonNext } from "../ButtonNext";

import { Container, Cups, Pedido, Buttons } from "./style";
import { useAcaiSizes } from "../../hook/acaiSizes";
import { useEffect, useState } from "react";
import { usePedido } from "../../hook/pedido";

export function Modal(props: { image: string }) {
  const { allAcaiSizes, findAllSizes } = useAcaiSizes();
  const { pedido, insertPedido } = usePedido();
  const navigate = useNavigate();
  const [ isLoading, setIsLoading ] = useState(true);

  function handleCloseDialogPedido(): void {
    const dialog: HTMLDialogElement = document.querySelector(".dialogPedido")!;
    const dialogDiv = dialog.querySelector("div")!;

    if(window.innerWidth <= 1000) {
      dialog.style.display = "none";
      return;  
    }

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
      navigate("/pedido?cremes");
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    (async() => await findAllSizes(controller.signal))();

    return () => { 
      controller.abort();
    }

  }, []);

  useEffect(() => {
    if(allAcaiSizes.length > 0) {
      setIsLoading(false);
    }

  }, [ allAcaiSizes ]);

  return (
    <Container className="dialogPedido">
      <div>
        <div>
          <SvgCup />
          <p>Tamanho</p>
        </div>

        <Cups>
          {
            isLoading ?
            <div>CARREGANDO...</div>
            :
            allAcaiSizes?.map((acaiSize: { id: number, size: string, price: string }, index: number) => (
              <button key={ index } onClick={() => 
                insertPedido({ size: acaiSize.size, initialPrice: acaiSize.price, totalPrice: acaiSize.price })
              }> 
                <Cup img={ props.image } quantity={ acaiSize.size } price={ acaiSize.price } />
              </button>
            ))
          }
        </Cups>

        <div>
          <Pedido>
            <p>SELECIONADO</p>
            <div>
              {
                pedido.size != undefined && pedido.initialPrice != undefined ?
                <Cup img={ props.image } quantity={ pedido.size } price={ pedido.initialPrice } />
                :
                <p>selecione um tamanho</p>
              } 
            </div>
          </Pedido>

          <Buttons>
            <ButtonBack onClick={ handleCloseDialogPedido } />
            <ButtonNext onClick={ handleNavigateOrder } />
          </Buttons>
        </div>
      </div>
    </Container>
  )
}