import { TouchableOpacityProps } from 'react-native';

import { Container, Title, FilterStyleProps } from './styles';

type Props = TouchableOpacityProps & FilterStyleProps & {
  title: string;
}

export function Filter({ title, isActive = false, ...props }: Props) {
  return (
    <Container isActive={isActive} {...props}>
      <Title>
        {title}
      </Title>
    </Container>
  );
}