import { TouchableOpacityProps } from "react-native"
import { ButtonTypeStyleProps, Container, Title } from "./styles"

type ButtonProps = TouchableOpacityProps & {
  title: string
  type?: ButtonTypeStyleProps
}

export function Button({title, type = 'PRIMARY', ...props}: ButtonProps) {
  return (
    <Container 
      type={type}
      {...props}
    >
      <Title>
        {title}
      </Title>
    </Container>
  )
}