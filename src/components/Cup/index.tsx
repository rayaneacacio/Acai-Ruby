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

      <div style={{ backgroundImage: `url(${ props.img })` }}></div>
      
      <p>R$ { props.price }</p>
    </Container>
  )
}