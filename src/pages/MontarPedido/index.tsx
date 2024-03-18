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
import { Recibo } from "../../components/Recibo";

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
  const [ allAcaiComplementosSelected, setAllAcaiComplementosSelected ] = useState<string[]>([]); //todos
  // os valores de complementos adicionados (apenas 3);
  const [ allAcaiExtrasSelected, setAllAcaiExtrasSelected ] = useState<{ name: string, amount: number }[]>([]); //todos
  //os valores de componentes extras adicionados e sua respectiva quantidade;
  const [ isLoading, setIsLoading ] = useState<boolean>(true);

  function handleNextNavigation(): void {
    switch(propsMontarAcai.category) {
      case "cremes":
        navigate(`/pedido?complementos`);
        break;

      case "complementos":
        navigate(`/pedido?coberturas`);
        break;

      case "coberturas":
        navigate(`/pedido?extras`);
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
      handleRemoveAcaiComponent(acaiComponentName, buttonSelected);
      return;
    }

    switch(propsMontarAcai.category)  {
      case "complementos":
        if(allAcaiComplementosSelected.length < 3) {
          setAllAcaiComplementosSelected([...allAcaiComplementosSelected, acaiComponentName]);
        } else {
          const complementosFiltered = allAcaiComplementosSelected.slice(1, 3);
          const allButtonsSelected: HTMLButtonElement[] = Array.from(document.querySelectorAll(".buttonOnFocus"));
          allButtonsSelected.map(btn => {
            if((btn.innerText).toLowerCase() == allAcaiComplementosSelected[0]) {
              btn.classList.remove("buttonOnFocus");
            }
          });
          setAllAcaiComplementosSelected(complementosFiltered.concat(acaiComponentName));
        }
        break;

      case "extras":
        setAllAcaiExtrasSelected([...allAcaiExtrasSelected, { name: acaiComponentName, amount: count } ]);
        break;

      default:
        handleClearButtons();
        break;
    }
  
    buttonSelected.classList.add("buttonOnFocus");
    setPropsMontarAcai({ ...propsMontarAcai, componentSelected: acaiComponentName });
  }

  function handleRemoveAcaiComponent(acaiComponentName: string, buttonSelected: HTMLButtonElement): void {
    const complementosFiltered = allAcaiComplementosSelected.filter(complemento => complemento != acaiComponentName);
    const extrasFiltered = allAcaiExtrasSelected.filter(extra => extra.name != acaiComponentName);

    setAllAcaiComplementosSelected(complementosFiltered);
    setAllAcaiExtrasSelected(extrasFiltered);

    buttonSelected.classList.remove("buttonOnFocus");
  }

  function handleClearButtons(): void {
    const allButtons: HTMLButtonElement[] = Array.from(document.querySelectorAll(".ingredients button"));
    allButtons.map(btn => btn.classList.remove("buttonOnFocus"));
  }

  function savePedido(): void {
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
            complementos: allAcaiComplementosSelected 
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
        const totalPrice = calculateTotalPrice();
        insertPedido({
          ...pedido, 
          totalPrice: totalPrice,
          acaiComponents: { 
            ...pedido.acaiComponents, 
            extras: allAcaiExtrasSelected 
          }
        });
        break;
    }
        
  }

  function calculateTotalPrice(): string {
    let priceExtras = 0;
    allAcaiExtrasSelected.map(componentExtra => {
      priceExtras = priceExtras + (componentExtra.amount * 1.99);
    });

    let value: string = pedido.initialPrice!.split(" ")[1];
    let numberValue: number = Number(value.replace(",", "."));
    let totalPrice: string = (numberValue + priceExtras).toFixed(2);
    totalPrice = totalPrice.replace(".", ",");

    return `R$ ${ totalPrice }`;
  }

  function handleOpenModalRecibo(): void {
    (document.querySelector(".modalRecibo")! as HTMLDialogElement).style.display = "block";
  }

  useEffect(() => {
    const controller = new AbortController();
    (async() => await findAcaiComponents(controller.signal))();

    return () => {
      controller.abort();
    }

  }, []);

  useEffect(() => {
    setAllAcaiComplementosSelected([]);
    setAllAcaiExtrasSelected([]);

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

  useEffect(() => {
    savePedido();

  }, [ propsMontarAcai.componentSelected, allAcaiComplementosSelected, allAcaiExtrasSelected ]);

  useEffect(() => {
    if(propsMontarAcai.componentSelected) {
      const acaiExtrasFiltered = allAcaiExtrasSelected.filter(index => index.name != propsMontarAcai.componentSelected );
      setAllAcaiExtrasSelected([...acaiExtrasFiltered, { name: propsMontarAcai.componentSelected, amount: count } ]);
    }

  }, [ count ]);

  useEffect(() => {
    setCount(1);

  }, [ propsMontarAcai.componentSelected ]);

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

      <div className="divDisplay">
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
          <button onClick={ handleOpenModalRecibo }>
            <p>VISUALIZAR</p>
            <SvgView />
          </button>

          <div>
            {
              pedido.name &&
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
                  : pedido.acaiComponents && pedido.acaiComponents.creme &&
                  <p>
                    <span>Creme: <strong>{ pedido.acaiComponents.creme }</strong></span>
                  </p>
                }

                {
                  propsMontarAcai.category == "complementos" && allAcaiComplementosSelected.length > 0 ? 
                  <p>
                    <span>Complementos: <strong>{ 
                      allAcaiComplementosSelected.length > 1 ? 
                      `${allAcaiComplementosSelected[0]}...` 
                      : allAcaiComplementosSelected[0]
                      }</strong> </span>
                  </p>
                  : pedido.acaiComponents && pedido.acaiComponents.complementos && pedido.acaiComponents.complementos.length > 0 &&
                  <p>
                    <span>Complementos: <strong>{ 
                        pedido.acaiComponents.complementos.length > 1 ? 
                        `${pedido.acaiComponents.complementos[0]}...` 
                        : pedido.acaiComponents.complementos[0] 
                      }</strong> </span>
                  </p>
                }

                <p>
                  <span></span>
                  <span><strong>Total:</strong>{ pedido.totalPrice }</span>
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
            {
              url.search == "?extras" ?
              <button className="buttonPedir">FAZER PEDIDO</button>
              :
              <ButtonNext onClick={ handleNextNavigation }/>
            }
          </div>
        </div>
      </div>

      <Recibo />
    </Container>
  )
}