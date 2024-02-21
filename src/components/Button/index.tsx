import { ReactElement } from "react";
import { Container } from "./style";

export function Button(props: { icon: ReactElement, text: string }): ReactElement {
  return (
    <Container>
      <div>
        { props.icon }
      </div>
      
      <p>{ props.text }</p>
    </Container>
  )
}