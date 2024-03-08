import { Dispatch, ReactElement, SetStateAction, createContext, useContext, useState } from "react";
import { api } from "../services/api";

interface IAcaiSizeContext {
  allAcaiSizes: IObjectSize[];
  sizeSelected: IObjectSize;
  setSizeSelected: Dispatch<SetStateAction<IObjectSize>>,
  findAllSizes: (signal: AbortSignal) => Promise<void>;
};

const initialValue = {
  allAcaiSizes: [{ id: 0, size: "", price: "" }],
  sizeSelected: { id: 0, size: "", price: "" },
  setSizeSelected: () => {},
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
  const [ sizeSelected, setSizeSelected ] = useState<IObjectSize>({
    id: 0,
    size: "",
    price: ""
  });

  async function findAllSizes(signal: AbortSignal): Promise<void> {
    try {
      const response = await api.get("/acai_sizes/index", { signal });
      setAllAcaiSizes(response.data);

    } catch(error) {
      console.error(`erro ao buscar tamanhos do açaí: ${ error }`);
    }
  }

  return (
    <AcaiSizesContext.Provider value={{ allAcaiSizes, findAllSizes, sizeSelected, setSizeSelected }}>
      { props.children }
    </AcaiSizesContext.Provider>
  )
}

function useAcaiSizes() {
  return useContext(AcaiSizesContext);
}

export { AcaiSizesProvider, useAcaiSizes };