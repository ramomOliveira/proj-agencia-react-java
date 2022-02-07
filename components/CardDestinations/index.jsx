import { Container, WrapperDescription, CardImg } from './style';

export default function CardDestinations({ title, description, src }) {
  return (
    <Container>
      <WrapperDescription>
        <h1>{title}</h1>
        <p>{description}</p>
      </WrapperDescription>

      <CardImg>
        <img src={src} alt="Imagem Lugar" />
      </CardImg>
    </Container>
  );
}
