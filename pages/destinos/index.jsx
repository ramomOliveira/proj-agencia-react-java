import Head from 'next/head';
import CardImageIcon from '../../components/CardImageIcon';
import Layout from '../../components/Layout';
import TransparentWhiteCard from '../../components/TransparentWhiteCard';
import { BoxIcon } from '../../styles/home/style';
import {
  WrapperTips,
  WrapperMain,
  AsideLeft,
  AsideRight,
} from '../../styles/destinations/style';
import CardDestinations from '../../components/CardDestinations';

const arrayDestinations = [{}, {}, {}, {}, {}];

export default function Destinations() {
  return (
    <>
      <Head>
        <title>Destinos</title>
      </Head>
      <Layout subTitle="Destinos">
        <CardImageIcon
          srcIcon="/images/bolsa-img.webp"
          nameButton="Começar"
          subTitle="A aventura"
        />

        <WrapperTips>
          <div>
            <TransparentWhiteCard>Destinos de verão</TransparentWhiteCard>
            <BoxIcon>
              <img src="/images/icon-aviao.webp" alt="" />
            </BoxIcon>
          </div>

          <h1>Dicas e sugestões de hotéis e passeios</h1>
        </WrapperTips>

        <WrapperMain>
          <AsideLeft>
            {arrayDestinations.map(() => (
              <CardDestinations />
            ))}
          </AsideLeft>

          <AsideRight>Ok</AsideRight>
        </WrapperMain>
      </Layout>
    </>
  );
}
