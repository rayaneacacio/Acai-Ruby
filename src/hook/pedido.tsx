import { Dispatch, ReactElement, SetStateAction, createContext, useContext, useEffect, useState } from "react";

interface IPedidoContext {
  pedido: IPedido;
  setPedido: Dispatch<SetStateAction<IPedido>>;
  insertPedido: (propsPedido: {}) => void
};

const initialValue = {
  pedido: {
    name: undefined,
    image: undefined,
    size: undefined,
    initialPrice: undefined,
    totalPrice: undefined,
    acaiComponents: undefined
  },
  setPedido: () => {},
  insertPedido: () => {}
};

interface IPedido {
  name: string | undefined,
  image: string | undefined,
  size: string | undefined,
  initialPrice: string | undefined,
  totalPrice: string | undefined,
  acaiComponents: {} | undefined
}

export const PedidoContext = createContext<IPedidoContext>(initialValue);

function PedidoProvider(props: { children: ReactElement }) {
  const [ pedido, setPedido ] = useState<IPedido>(initialValue.pedido);

  function insertPedido(propsPedido: {
    name?: string,
    image?: string,
    size?: string,
    initialPrice?: string,
    totalPrice?: string,
    acaiComponents?: {}
  }): void {
    const values = {
      name: propsPedido.name ?? pedido.name,
      image: propsPedido.image ?? pedido.image,
      size: propsPedido.size ?? pedido.size,
      initialPrice: propsPedido.initialPrice ?? pedido.initialPrice,
      totalPrice: propsPedido.totalPrice ?? pedido.initialPrice,
      acaiComponents: propsPedido.acaiComponents ?? pedido.acaiComponents
    }

    setPedido(values);
    sessionStorage.setItem("pedido", JSON.stringify(values));
  }

  useEffect(() => {
    const pedidoSessionStorage = sessionStorage.getItem("pedido");

    if(pedidoSessionStorage) {
      setPedido(JSON.parse(pedidoSessionStorage));
    }
  }, []);

  return (
    <PedidoContext.Provider value={{ pedido, setPedido, insertPedido }}>
      { props.children }
    </PedidoContext.Provider>
  )
}

function usePedido() {
  return useContext(PedidoContext);
}

export { PedidoProvider, usePedido };