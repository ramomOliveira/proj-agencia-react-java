import Head from 'next/head';
import CardImageIcon from '../../components/CardImageIcon';
import Layout from '../../components/Layout';

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
      </Layout>
    </>
  );
}
