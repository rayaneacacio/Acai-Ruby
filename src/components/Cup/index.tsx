import { ReactElement } from "react";
import { Container } from "./style";

export function Cup(props: { img: string, quantity: string, si?: string, price: string }): ReactElement {
  return (
    <Container>
      <div>
        <p>{ props.quantity } </p>
        {
          props.si &&
          <p>{ props.si }</p>
        }
      </div>

      <img src={ props.img } alt="" />

      <p>R$ { props.price }</p>
    </Container>
  )
}