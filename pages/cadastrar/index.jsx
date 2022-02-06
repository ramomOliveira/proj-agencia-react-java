import Head from 'next/head';

import ComingSoon from '../../components/ComingSoon';
import Layout from '../../components/Layout';

export default function Register() {
  return (
    <>
      <Head>
        <title>Cadastro</title>
      </Head>
      <Layout subTitle="Faça seu Cadastro">
        <ComingSoon />
      </Layout>
    </>
  );
}
