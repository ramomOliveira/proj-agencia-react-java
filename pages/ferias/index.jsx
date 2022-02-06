import Head from 'next/head';
import CardImageIcon from '../../components/CardImageIcon';
import Layout from '../../components/Layout';
import CardPackage from '../../components/CardPackage';

import { WrapperMain } from '../../styles/vacation/style';

const packageVocation = [{}, {}, {}, {}, {}, {}, {}, {}];

export default function Vocation() {
  return (
    <>
      <Head>
        <title>Ferias</title>
      </Head>
      <Layout subTitle="Ferias">
        <CardImageIcon
          borderLeft
          gridReverse
          size25
          reverse
          srcIcon="images/icon-chinelo.webp"
          subTitle="Esplore. Sonhe. Descubra."
        />

        <WrapperMain>
          {packageVocation.map(() => (
            <CardPackage />
          ))}
        </WrapperMain>
      </Layout>
    </>
  );
}
