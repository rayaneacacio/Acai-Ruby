import { ReactElement, useEffect, useState } from "react";

import { SvgCremes } from "../../assets/svgs/cremes";
import { SvgComplementos } from "../../assets/svgs/complementos";
import { SvgCoberturas } from "../../assets/svgs/coberturas";
import { SvgExtras } from "../../assets/svgs/extras";
import { SvgCheckMark } from "../../assets/svgs/checkmark";
import { SvgView } from "../../assets/svgs/view";
import { SvgMinus } from "../../assets/svgs/minus";
import { SvgPlus } from "../../assets/svgs/plus";

import { ButtonBack } from "../../components/ButtonBack";
import { ButtonNext } from "../../components/ButtonNext";

import { Container, Ingredients } from "./style";
import { usePedido } from "../../hook/pedido";
import { useAcaiComponents } from "../../hook/acaiComponents";
import { useLocation, useNavigate } from "react-router-dom";

export function Order(): ReactElement {
  const { pedido } = usePedido();
  const { findAcaiComponents, allComponents } = useAcaiComponents();
  const url = useLocation();
  const navigate = useNavigate();

  const [ propsMontarAcai, setPropsMontarAcai ] = useState<{
    category: string | undefined,
    components: { id: number, name: string, type: string }[],
    componentSelected: string | undefined
  }>({
    category: undefined,
    components: [],
    componentSelected: undefined
  });

  const [ subtitle, setSubtitle ]  = useState<string>("");
  const [ count, setCount ] = useState<number>(1);

  function handleNextNavigation(): void {
    switch(propsMontarAcai.category) {
      case "cremes":
        navigate(`/pedido?complementos`);
        break;
      case "complementos":
        navigate(`/pedido?coberturas`);
        break
      case "coberturas":
        navigate(`/pedido?extras`);
        break;
      case "extras":
        break;
    }
  }

  function handleSubtitle(category: string): void {
    switch(category) {
      case "cremes":
        setSubtitle("escolha até 1");
        break;
      case "complementos":
        setSubtitle("escolha até 3");
        break
      case "coberturas":
        setSubtitle("escolha até 1");
        break;
      case "extras":
        setSubtitle("R$ 1,99 cada");
        break;
    }
  }

  function handleSvg(category: string): void {
    Array.from(document.querySelectorAll(".divSvgs div")!).map(divSvg => {
      divSvg.classList.remove("svgOnFocus");
    });

    const svg = document.querySelector(`.svg_${category}`) as SVGElement;
    svg.classList.add("svgOnFocus");
  }

  useEffect(() => {
    const controller = new AbortController();
    (async() => await findAcaiComponents(controller.signal))();

    return () => {
      controller.abort();
    }

  }, []);

  useEffect(() => {
    if(Object.values(allComponents).every(index => index.length > 0)) {
      const category = url.search.split("?")[1] as "cremes" || "complementos" || "coberturas" || "extras";
      const components = allComponents[category];
  
      setPropsMontarAcai({
        category: category,
        components: components,
        componentSelected: components[0].name,
      });

      handleSubtitle(category);
      handleSvg(category)
    }

  }, [ allComponents, url ]);
  
  return (
    <Container>
      <div>
        <h1>ESCOLHA SEUS <strong>COMPONENTES</strong></h1>
        <div>
          <h1>{ propsMontarAcai.category }</h1>
          <p>{ subtitle }</p>
        </div>
      </div>

      <div className="divSvgs">
        <div className="svg_cremes"><SvgCremes /></div>
        <div className="svg_complementos"><SvgComplementos /></div>
        <div className="svg_coberturas"><SvgCoberturas /></div>
        <div className="svg_extras"><SvgExtras /></div>
      </div>

      <Ingredients>
        {
          propsMontarAcai.components?.map((creme: { id: number, name: string, type: string }, index: number) => (
            <button key={ index } onClick={() => setPropsMontarAcai({ ...propsMontarAcai, componentSelected: creme.name })}>{ creme.name }</button>
          ))
        }
      </Ingredients>

      <div>
        <div className="pedido">
          <SvgCheckMark />
          {
            pedido.name != undefined &&
            <>
              <img src={ pedido.image } alt="" />
              <p><strong>{ pedido.name }</strong></p>
              <p>{ pedido.size }</p>
            </>
          }
        </div>

        <div className="recibo">
          <button>
            <p>VISUALIZAR</p>
            <SvgView />
          </button>

          <div>
            {
              pedido.name != undefined &&
              <>
                <p>
                  <span><strong>{ pedido.name }</strong></span>
                  <span><strong>{ pedido.size }</strong></span>
                </p>

                <p>
                  <span>Tamanho: <strong>{ pedido.size }</strong></span>
                  <span><strong>Subtotal:</strong>{ pedido.initialPrice }</span>
                </p>

                <p>
                  <span></span>
                  <span><strong>Total:</strong>{ pedido.initialPrice }</span>
                </p>
              </>
            }
          </div>
        </div>

        <div>
          <div>
            <div className="divButtonsCount">
              <button onClick={() => setCount(count == 1 ? count : count-1) } ><SvgMinus /></button>
              <span>{ count }</span>
              <button onClick={() => setCount(count+1) }><SvgPlus /></button>
            </div>

            <p style={{ height: "1rem" }}>{ propsMontarAcai.componentSelected }</p>
          </div>

          <div className="divButtonsBackAndNext">
            <ButtonBack />
            <ButtonNext onClick={ handleNextNavigation }/>
          </div>
        </div>
      </div>
    </Container>
  )
}