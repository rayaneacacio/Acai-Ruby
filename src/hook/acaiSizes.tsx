import { ReactElement, createContext, useContext, useState } from "react";
import { api } from "../services/api";

interface IAcaiSizeContext {
  allAcaiSizes: IObjectSize[];
  findAllSizes: (signal: AbortSignal) => Promise<void>;
};

const initialValue = {
  allAcaiSizes: [{ id: 0, size: "", price: "" }],
  findAllSizes: async() => {},
};

interface IObjectSize {
  id: number,
  size: string,
  price: string
}

export const AcaiSizesContext = createContext<IAcaiSizeContext>(initialValue);

function AcaiSizesProvider(props: { children: ReactElement }) {
  const [ allAcaiSizes, setAllAcaiSizes ] = useState<IObjectSize[]>([]);

  async function findAllSizes(signal: AbortSignal): Promise<void> {
    try {
      const response = await api.get("/acai_sizes/index", { signal });
      setAllAcaiSizes(response.data);

    } catch(error) {
      console.error(`erro ao buscar tamanhos do açaí: ${ error }`);
    }
  }

  return (
    <AcaiSizesContext.Provider value={{ allAcaiSizes, findAllSizes }}>
      { props.children }
    </AcaiSizesContext.Provider>
  )
}

function useAcaiSizes() {
  return useContext(AcaiSizesContext);
}

export { AcaiSizesProvider, useAcaiSizes };