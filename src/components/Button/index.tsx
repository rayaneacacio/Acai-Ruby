import { ReactElement } from "react";
import { Container } from "./style";

export function Button(props: { icon: string, text: string }): ReactElement {
  return (
    <Container>
      <div>
        <img src={ props.icon } alt="" />
      </div>
      
      <p>{ props.text }</p>
    </Container>
  )
}