import { Container, WrapperDescription, CardImg, Img } from './style';

export default function CardDestinations({ title, description, src }) {
  return (
    <Container>
      <WrapperDescription>
        <h1>{title}</h1>
        <p>{description}</p>
      </WrapperDescription>

      <CardImg>
        <Img imgUrl={src} />
      </CardImg>
    </Container>
  );
}
