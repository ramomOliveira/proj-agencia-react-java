import Head from 'next/head';
import Layout from '../../components/Layout';
import TransparentWhiteCard from '../../components/TransparentWhiteCard';

import {
  WrapperTop,
  WrapperAbout,
  InfoAbout,
  ImgAbout,
  WrapperStar,
  Star,
  WrapperReasons,
  WrapperDepositions,
} from '../../styles/about/style';

const arrayDestinations = [{}, {}, {}];

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre nós</title>
      </Head>
      <Layout subTitle="Quem somos">
        <WrapperTop>
          <WrapperAbout>
            <ImgAbout />

            <InfoAbout>
              <h1>Sou um título</h1>
              <p>
                Sou um parágrafo. Clique aqui para editar e adicionar o seu
                próprio texto. É fácil! Basta clicar em Editar Texto ou clicar
                duas vezes sobre mim e você poderá adicionar o seu próprio
                conteúdo e trocar fontes. Sou um ótimo espaço para você contar
                sua história.
              </p>
              <p>
                Sou um parágrafo. Clique aqui para editar e adicionar o seu
                próprio texto. É fácil! Basta clicar em Editar Texto ou clicar
                duas vezes sobre mim e você poderá adicionar o seu próprio
                conteúdo e trocar fontes. Sou um ótimo espaço para você contar
                sua história.
              </p>
            </InfoAbout>
          </WrapperAbout>

          <WrapperStar>
            <h1>4 Razões para reservar:</h1>
            <div>
              <Star>
                <img src="/images/star-yellow.svg" alt="" />
                <img src="/images/star-yellow.svg" alt="" />
                <img src="/images/star-yellow.svg" alt="" />
                <img src="/images/star-yellow.svg" alt="" />
                <img src="/images/star.svg" alt="" />
              </Star>
              <WrapperReasons>
                <span>Especializado em viagens</span>
                <p>Férias sob medida</p>
                <p>Roteiros mundiais</p>
                <p>100% seguro</p>
              </WrapperReasons>
            </div>
          </WrapperStar>
        </WrapperTop>

        <TransparentWhiteCard dNone>Depoimentos</TransparentWhiteCard>

        <WrapperDepositions>
          {arrayDestinations.map(() => (
            <TransparentWhiteCard paddingSmall author="João J.">
              &quot; Nenhum problema durante a viagem, vocês foram perfeitos com
              a gente!&quot;
            </TransparentWhiteCard>
          ))}
        </WrapperDepositions>
      </Layout>
    </>
  );
}
