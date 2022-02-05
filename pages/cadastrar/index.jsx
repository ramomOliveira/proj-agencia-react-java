import Head from 'next/head';
import CardCarousel from '../../components/CardCarousel';
import Layout from '../../components/Layout';

export default function Register() {
  return (
    <>
      <Head>
        <title>Cadastro</title>
      </Head>
      <Layout subTitle="Faça seu Cadastro">
        <CardCarousel />
      </Layout>
    </>
  );
}
