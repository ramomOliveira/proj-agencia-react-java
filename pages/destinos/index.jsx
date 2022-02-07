import Head from 'next/head';
import CardImageIcon from '../../components/CardImageIcon';
import Layout from '../../components/Layout';
import TransparentWhiteCard from '../../components/TransparentWhiteCard';
import { BoxIcon } from '../../styles/home/style';
import CardDestinations from '../../components/CardDestinations';

import {
  WrapperTips,
  WrapperMain,
  AsideLeft,
  AsideRight,
  CardGreen,
  CardHelp,
  Card0800,
  BorderBottom,
} from '../../styles/destinations/style';

const arrayDestinations = [
  {
    title: 'Dinamarca',
    description:
      'A Dinamarca, que não estava no ranking dos 7 países com melhor qualidade de vida da Europa em 2020, ficou com o primeiro lugar europeu em 2021 e a segunda colocação global na pesquisa.',
    src: '/images/europa-card.webp',
  },
  {
    title: 'África',
    description:
      'Com uma área enorme e uma biodiversidade, viagens para a África são muito procuradas pelos safáris — especialmente nos desertos e savanas, os biomas mais lembrados usualmente. ',
    src: '/images/africa-card.webp',
  },
  {
    title: 'Ásia',
    description:
      'Praias paradisíacas, montanhas, roteiros culturais, gastronómicos… vai encontrar tudo por lá! Venha descobrir os melhores destinos de férias na Ásia.',
    src: '/images/asia-card.webp',
  },
  {
    title: 'Austrália',
    description:
      'O clima tropical é muito parecido com o de algumas regiões brasileiras, o povo é bastante hospitaleiro, as praias favorecem a prática de surfe e o dólar australiano sai mais barato que o americano.',
    src: '/images/australia-card.webp',
  },
  {
    title: 'Canadá',
    description:
      'O Canadá está recheado de atrações turísticas para todos os gostos e bolsos. Não importa se você estará sozinho, com amigos ou em família. Opções não faltam, seja no calor do verão ou no inverno, com muita neve.',
    src: '/images/canada-card.webp',
  },
];

export default function Destinations() {
  return (
    <>
      <Head>
        <title>Destinos</title>
      </Head>
      <Layout subTitle="Destinos">
        <CardImageIcon
          borderRight
          srcIcon="/images/bolsa-img.webp"
          nameButton="Começar"
          subTitle="A aventura"
        />

        <WrapperTips>
          <div>
            <TransparentWhiteCard dNone>Destinos de verão</TransparentWhiteCard>
            <BoxIcon>
              <img src="/images/icon-aviao.webp" alt="" />
            </BoxIcon>
          </div>

          <h1>Dicas e sugestões de hotéis e passeios</h1>
        </WrapperTips>

        <WrapperMain>
          <AsideLeft>
            {arrayDestinations.map((item) => (
              <CardDestinations
                title={item.title}
                description={item.description}
                src={item.src}
              />
            ))}
          </AsideLeft>

          <AsideRight>
            <CardGreen>
              <p>
                A Trips Painless oferece informações sobre uma grande variedade
                de destinos. Saiba mais sobre o seu hoje mesmo e peça um
                orçamento
              </p>
            </CardGreen>

            <CardHelp>
              <p>Quer ajuda?</p>

              <div>
                <img src="images/icon-boia.webp" alt="" />
              </div>
            </CardHelp>

            <BorderBottom>
              <Card0800>
                <p>
                  Reserbar uma grande viagem é algo empolgante, mas também
                  cansativo. Nós entendemos. É por isso que oferecemos nossos
                  especialistas para fazer da sua viagem algo tranquilo e
                  incrível
                </p>
                <h1>Entre em contato 0800-000-0000</h1>
              </Card0800>
            </BorderBottom>
          </AsideRight>
        </WrapperMain>
      </Layout>
    </>
  );
}
