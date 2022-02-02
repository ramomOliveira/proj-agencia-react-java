import { Container } from './style';

export default function CardPriceOffer({ priceOffer, merchanOffer }) {
  return (
    <Container>
      <h1>R$ {priceOffer}</h1>
      <div>
        <p>{merchanOffer}</p>
        <span>+</span>
      </div>
    </Container>
  );
}
