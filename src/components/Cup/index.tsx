import { ReactElement } from "react";
import { Container } from "./style";

export function Cup(props: { img: string, quantity: string, price: string }): ReactElement {
  return (
    <Container>
      <div>
        <p>{ props.quantity } </p>
      </div>

      <div style={{ backgroundImage: `url(${ props.img })` }}></div>
      
      <p>{ props.price }</p>
    </Container>
  )
}