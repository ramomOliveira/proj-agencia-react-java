import { Container, WrapperDescription, CardImg } from './style';

export default function CardDestinations() {
  return (
    <Container>
      <WrapperDescription>
        <h1>Europa</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At atque
          exercitationem delectus officiis blanditiis molestias vero aspernatur,
        </p>
      </WrapperDescription>

      <CardImg>
        <img src="/images/europa-card.webp" alt="" />
      </CardImg>
    </Container>
  );
}
