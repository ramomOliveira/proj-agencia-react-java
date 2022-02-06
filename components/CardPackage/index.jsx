import { Container, TitleH2, TitleH1, TitleH3, WrapperContent } from './style';

export default function CardPackage() {
  return (
    <Container>
      <img src="/images/vacation/img-ferias1.webp" alt="" />
      <WrapperContent>
        <TitleH1>R$ 999</TitleH1>
        <TitleH2>Paris:</TitleH2>
        <TitleH3>7 noites, hotel 4 estrelas e café da manhã</TitleH3>
        <p>
          Sou um parágrafo. Clique aqui para editar e adicionar o seu texto. É
          fácil! Basta clicar em “Editar Texto” ou sobre mim e poderá adicionar
          o seu conteúdo e trocar fontes.
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
