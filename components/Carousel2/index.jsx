import makeCarousel from 'react-reveal/makeCarousel';
// we'll need the Slide component for sliding animations
// but you can use any other effect
import Slide from 'react-reveal/Slide';
// we'll use styled components for this tutorial
// but you can use any other styling options ( like plain old css )

import { Container, ImgCarousel } from './style';

const CarouselUI = ({ children }) => <Container>{children}</Container>;
const Carousel = makeCarousel(CarouselUI);

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

export default function Carousel2() {
  return (
    <Carousel defaultWait={2000}>
      {arrayImg.map((item) => (
        <Slide key={item.id} right>
          <ImgCarousel>
            <img src={item.img} alt="" />
          </ImgCarousel>
        </Slide>
      ))}
    </Carousel>
  );
}
