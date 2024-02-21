import { ReactElement } from "react";
import { Container } from "./style";

export function Button(props: { icon: ReactElement, text: string, onClick?: () => void}): ReactElement {
  return (
    <Container onClick={ props.onClick }>
      <div>
        { props.icon }
      </div>
      
      <p>{ props.text }</p>
    </Container>
  )
}