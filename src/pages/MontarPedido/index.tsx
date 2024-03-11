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

export function MontarPedido(): ReactElement {
  const { pedido, insertPedido, cancelPedido } = usePedido();
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
  }); //propriedades de acai referentes a cada categoria;

  const [ subtitle, setSubtitle ]  = useState<string>("");
  const [ count, setCount ] = useState<number>(1);
  const [ allAcaiComponentsSelected, setAllAcaiComponentsSelected ] = useState<string[]>([]); //para quando for
  // necessario selecionar mais de um componente na montagem de acai(complementos e extras);
  const [ isLoading, setIsLoading ] = useState<boolean>(true);

  function handleNextNavigation(): void {
    savePedido();

    switch(propsMontarAcai.category) {
      case "cremes":
        if(propsMontarAcai.componentSelected != undefined) {
          navigate(`/pedido?complementos`);
        }
        break;

      case "complementos":
        if(allAcaiComponentsSelected.length > 0) {
          navigate(`/pedido?coberturas`);
        }
        break;

      case "coberturas":
        if(propsMontarAcai.componentSelected != undefined) {
          navigate(`/pedido?extras`);
        }
        break;

      case "extras":
        break;
    }
  }

  function handleBackNavigation(): void {
    const svg = document.querySelector(`.svg_${propsMontarAcai.category}`) as SVGElement;
    svg?.classList.remove("svgOnFocus");

    if(propsMontarAcai.category == "cremes") {
      cancelPedido();
    }
    
    navigate(-1);
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
    const allSvgs = [
      "cremes",
      "complementos",
      "coberturas",
      "extras"
    ];

    for(let i = 0; i <= 3; i++) {
      if(allSvgs[i] == category) {
        const svg = document.querySelector(`.svg_${ allSvgs[i] }`) as SVGElement;
        const indexOfCategory = allSvgs.indexOf(category);
        const categoriasAnteriores = allSvgs.slice(0, indexOfCategory);

        svg.classList.add("svgOnFocus");
        categoriasAnteriores?.map(item => {
          (document.querySelector(`.svg_${ item }`) as SVGElement).classList.add("svgOnFocus");
        });
      }
    }

  }

  function handleAddAcaiComponent(acaiComponentName: string, buttonSelected: HTMLButtonElement): void {
    if(buttonSelected.classList.contains("buttonOnFocus")) {
      const complementosFiltered = allAcaiComponentsSelected.filter(complemento => complemento != acaiComponentName);
      setAllAcaiComponentsSelected(complementosFiltered);
      buttonSelected.classList.remove("buttonOnFocus");
      return;
    }

    switch(propsMontarAcai.category)  {
      case "complementos":
        if(allAcaiComponentsSelected.length < 3) {
          setAllAcaiComponentsSelected([...allAcaiComponentsSelected, acaiComponentName]);
        } else {
          const complementosFiltered = allAcaiComponentsSelected.slice(1, 3);
          const allButtonsSelected: HTMLButtonElement[] = Array.from(document.querySelectorAll(".buttonOnFocus"));
          allButtonsSelected.map(btn => {
            if((btn.innerText).toLowerCase() == allAcaiComponentsSelected[0]) {
              btn.classList.remove("buttonOnFocus");
            }
          });
          setAllAcaiComponentsSelected(complementosFiltered.concat(acaiComponentName));
        }
        break;

      case "extras":
        setAllAcaiComponentsSelected([...allAcaiComponentsSelected, acaiComponentName]);
        break;

      default:
        handleClearButtons();
        break;
    }
  
    buttonSelected.classList.add("buttonOnFocus");
    setPropsMontarAcai({ ...propsMontarAcai, componentSelected: acaiComponentName });
  }

  function handleClearButtons(): void {
    const allButtons: HTMLButtonElement[] = Array.from(document.querySelectorAll(".ingredients button"));
    allButtons.map(btn => btn.classList.remove("buttonOnFocus"));
  }

  function savePedido(): void {
    if(!propsMontarAcai.componentSelected) {
      return;
    }

    switch(propsMontarAcai.category) {
      case "cremes": 
        insertPedido({
          ...pedido, 
          acaiComponents: { 
            creme: propsMontarAcai.componentSelected 
          }
        });
        break;

      case "complementos": 
        insertPedido({
          ...pedido, 
          acaiComponents: { 
            ...pedido.acaiComponents, 
            complementos: allAcaiComponentsSelected 
          }
        });
        break;
      case "coberturas": 
        insertPedido({
          ...pedido, 
          acaiComponents: { 
            ...pedido.acaiComponents, 
            cobertura: propsMontarAcai.componentSelected 
          }
        });
        break;

      case "extras":
        insertPedido({
          ...pedido, 
          acaiComponents: { 
            ...pedido.acaiComponents, 
            extras: allAcaiComponentsSelected 
          }
        });
        break;
    }
        
  }

  useEffect(() => {
    const controller = new AbortController();
    (async() => await findAcaiComponents(controller.signal))();

    return () => {
      controller.abort();
    }

  }, []);

  useEffect(() => {
    setAllAcaiComponentsSelected([]);

    if(Object.values(allComponents).every(index => index.length > 0)) {
      const category = url.search.split("?")[1] as "cremes" || "complementos" || "coberturas" || "extras";
      const components = allComponents[category];
  
      setPropsMontarAcai({
        category: category,
        components: components,
        componentSelected: undefined,
      });

      handleSubtitle(category);
      handleSvg(category);
      setIsLoading(false);
    }

  }, [ allComponents, url ]);

  useEffect(() => {
    handleClearButtons();

  }, [ propsMontarAcai.category ]);

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

      {
        isLoading ?
        <div className="divIsLoading">CARREGANDO...</div>
        :
        <Ingredients className="ingredients">
          {
            propsMontarAcai.components?.map((acaiComponent: { id: number, name: string, type: string }, index: number) => (
              <button key={ index } onClick={(event) => handleAddAcaiComponent(acaiComponent.name, event.currentTarget) }>
                { acaiComponent.name }
              </button>
            ))
          }
        </Ingredients>
      }

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

                {
                  propsMontarAcai.category == "cremes" && propsMontarAcai.componentSelected ?
                  <p> 
                    <span>Creme: <strong>{ propsMontarAcai.componentSelected }</strong>
                    </span>
                  </p>
                  : pedido.acaiComponents.creme &&
                  <p>
                    <span>Creme: <strong>{ pedido.acaiComponents.creme }</strong></span>
                  </p>
                }

                {
                  propsMontarAcai.category == "complementos" && allAcaiComponentsSelected.length > 0 ? 
                  <p>
                    <span>Complementos: <strong>{ `${allAcaiComponentsSelected[0]}...` }</strong> </span>
                  </p>
                  : 
                  pedido.acaiComponents.complementos &&
                  <p>
                    <span>Complementos: <strong>{ `${pedido.acaiComponents.complementos[0]}...` }</strong> </span>
                  </p>
                }

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
            <ButtonBack onClick={ handleBackNavigation } />
            <ButtonNext onClick={ handleNextNavigation }/>
          </div>
        </div>
      </div>
    </Container>
  )
}