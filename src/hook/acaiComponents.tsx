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
      const response = await api.get(`/acai_components/index`, { signal });
      
      setAllComponents({
        cremes: response.data.cremes,
        complementos: response.data.complementos,
        coberturas: response.data.coberturas,
        extras: response.data.extras
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