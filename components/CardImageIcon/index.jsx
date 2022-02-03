import Buttons from '../Buttons';

import { Container, Carrossel, WrapperIcon, CarrosselReverse } from './style';

export default function CardImageIcon({
  nameButton,
  subTitle,
  srcIcon,
  reverse,
  size25,
}) {
  if (reverse) {
    return (
      <Container>
        <WrapperIcon size25={size25}>
          <img src={srcIcon} alt="" />
          <h1>{subTitle}</h1>
        </WrapperIcon>
        <CarrosselReverse />
      </Container>
    );
  }
  return (
    <Container>
      <Carrossel />
      <WrapperIcon>
        <img src={srcIcon} alt="" />
        <Buttons size25 paddingLarge>
          {nameButton}
        </Buttons>
        <h1>{subTitle}</h1>
      </WrapperIcon>
    </Container>
  );
}
