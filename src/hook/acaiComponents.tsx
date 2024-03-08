import { ReactElement, createContext, useContext, useState } from "react";
import { api } from "../services/api";

interface IAcaiComponentsContext {
  allComponents: {
    cremes: IComponent[],
    complementos: IComponent[],
    coberturas: IComponent[],
    extras: IComponent[]
  };
  findAcaiComponents: (signal: AbortSignal) => Promise<void>
};

const initialValue = {
  allComponents: {
    cremes: [],
    complementos: [],
    coberturas: [],
    extras: []
  },
  findAcaiComponents: async() => {}
};

interface IComponent {
  id: number; 
  name: string; 
  type: string 
}

export const AcaiComponentsContext = createContext<IAcaiComponentsContext>(initialValue);

function AcaiComponentsProvider(props: { children: ReactElement }) {
  const [ allComponents, setAllComponents ] = useState<{
    cremes: IComponent[],
    complementos: IComponent[],
    coberturas: IComponent[],
    extras: IComponent[]
  }>(initialValue.allComponents);

  async function findAcaiComponents(signal: AbortSignal): Promise<void> {
    try {
      const responseCremes = await api.get(`/acai_components/index?type=cremes`, { signal });
      const responseComplementos = await api.get(`/acai_components/index?type=complementos`, { signal });
      const responseCoberturas = await api.get(`/acai_components/index?type=coberturas`, { signal });
      const responseExtras = await api.get(`/acai_components/index?type=extras`, { signal });
      
      setAllComponents({
        cremes: responseCremes.data,
        complementos: responseComplementos.data,
        coberturas: responseCoberturas.data,
        extras: responseExtras.data
      });

    } catch(error) {
      console.error(`erro ao buscar componentes de acai: ${ error }`);
    }
  }

  return (
    <AcaiComponentsContext.Provider value={{ findAcaiComponents, allComponents }}>
      { props.children }
    </AcaiComponentsContext.Provider>
  )
}

function useAcaiComponents() {
  return useContext(AcaiComponentsContext);
}

export { AcaiComponentsProvider, useAcaiComponents };