import Buttons from '../Buttons';

import { Container, Carrossel, WrapperIcon, CarrosselReverse } from './style';

export default function CardImageIcon({
  nameButton,
  subTitle,
  srcIcon,
  reverse,
}) {
  if (reverse) {
    return (
      <Container>
        <WrapperIcon>
          <img src={srcIcon} alt="" />
          <Buttons size25 paddingLarge>
            {nameButton}
          </Buttons>
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
