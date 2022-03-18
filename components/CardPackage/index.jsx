import {
  Container,
  TitleH2,
  TitleH1,
  TitleH3,
  WrapperContent,
  Img,
} from './style';

export default function CardPackage({ src, price, city, title }) {
  return (
    <Container>
      <Img imgUrl={src} />

      <WrapperContent>
        <TitleH1>R$ {price}</TitleH1>
        <TitleH2>{city}:</TitleH2>
        <TitleH3>{title}</TitleH3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam
          accusamus odit dolores dignissimos cumque dolor saepe repudiandae
          veritatis nobis perferendis praesentium laborum ullam, assumenda
          aspernatur earum. Rem, ratione ut?
        </p>
        <div>
          <div>
            <img src="/images/icon-escrita.webp" alt="" />
          </div>
          <TitleH3>Mais Detalhes</TitleH3>
        </div>
      </WrapperContent>
    </Container>
  );
}
