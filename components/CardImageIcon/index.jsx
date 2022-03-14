import Buttons from '../Buttons';

import Carousel2 from '../Carousel2';

import { Container, WrapperIcon } from './style';

export default function CardImageIcon({
  nameButton,
  subTitle,
  srcIcon,
  reverse,
  size25,
  borderLeft,
  borderRight,
  gridReverse,
}) {
  if (reverse) {
    return (
      <Container gridReverse={gridReverse}>
        <WrapperIcon
          borderLeft={borderLeft}
          borderRight={borderRight}
          size25={size25}
        >
          <img src={srcIcon} alt="" />
          <h1>{subTitle}</h1>
        </WrapperIcon>
        <Carousel2 />
      </Container>
    );
  }
  return (
    <Container>
      <Carousel2 />
      <WrapperIcon
        size25={size25}
        borderRight={borderRight}
        borderLeft={borderLeft}
      >
        <img src={srcIcon === true} alt="" />
        <Buttons size25 paddingLarge>
          {nameButton}
        </Buttons>
        <h1>{subTitle}</h1>
      </WrapperIcon>
    </Container>
  );
}
