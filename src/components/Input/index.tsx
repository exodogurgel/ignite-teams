import { TextInputProps } from "react-native"
import { useTheme } from "styled-components/native"
import { Container, } from "./styles"

export function Input({...props}: TextInputProps) {
  const { COLORS } = useTheme()

  return (
    <Container 
      placeholderTextColor={COLORS.GRAY_300}
      {...props}
    >
    </Container>
  )
}