import { useRef } from 'react';

import {
  Container,
  Carousel,
  Item,
  ImageCarousel,
  WrapperNext,
  WrapperBack,
  Wrapper,
} from './style';

const arrayImg = [
  {
    id: '1',
    img: '/images/img-carrossel.webp',
  },
  {
    id: '2',
    img: '/images/img-carrossel2.webp',
  },
  {
    id: '3',
    img: '/images/img-carrossel3.webp',
  },
  {
    id: '4',
    img: '/images/img-carrossel4.webp',
  },
  {
    id: '5',
    img: '/images/img-carrossel5.webp',
  },
  {
    id: '6',
    img: '/images/img-carrossel3.webp',
  },
  {
    id: '7',
    img: '/images/img-carrossel4.webp',
  },
  {
    id: '8',
    img: '/images/img-carrossel5.webp',
  },
  {
    id: '9',
    img: '/images/img-carrossel3.webp',
  },
  {
    id: '10',
    img: '/images/img-carrossel4.webp',
  },
  {
    id: '11',
    img: '/images/img-carrossel5.webp',
  },
];

export default function CardCarousel() {
  const carousel = useRef(null);

  const handleLeftClick = (event) => {
    event.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (event) => {
    event.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  return (
    <Container>
      <Carousel ref={carousel}>
        {arrayImg.map((item) => (
          <Item key={item.id}>
            <ImageCarousel>
              <img src={item.img} alt="" />
            </ImageCarousel>
          </Item>
        ))}
      </Carousel>
      <Wrapper>
        <WrapperBack>
          <button onClick={handleLeftClick} type="button">
            <img src="/images/icon-arrow-back.svg" alt="" />
          </button>
        </WrapperBack>
        <WrapperNext>
          <button onClick={handleRightClick} type="button">
            <img src="/images/icon-arrow-next.svg" alt="" />
          </button>
        </WrapperNext>
      </Wrapper>
    </Container>
  );
}
