import { Container, SubTitle, Title } from "./styles";

type HighlightProps = {
  title: string
  subtitle: string
}

export function Highlight({ title, subtitle }: HighlightProps) {
  return (
    <Container>
      <Title>
        {title}
      </Title>

      <SubTitle>
        {subtitle}
      </SubTitle>
    </Container>
  )
}