import Head from 'next/head';
import Layout from '../../components/Layout';

export default function Panel() {
  return (
    <>
      <Head>
        <title>Sua Area</title>
      </Head>
      <Layout subTitle="Olá, Ramom">Painel do usuario</Layout>
    </>
  );
}
