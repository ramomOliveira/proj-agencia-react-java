import Head from 'next/head';
import Link from 'next/link';
import LayoutAdmim from '../../../components/Admim/LayoutAdmim';
import Buttons from '../../../components/Buttons';

import Layout from '../../../components/Layout';

import {
  WrapperList,
  WrapperHeader,
  DivNone,
  WrapperMain,
  WrapperButton,
} from '../../../styles/admin-vocations/style';

const packageVocation = [
  {
    src: '/images/vacation/img-ferias1.webp',
    price: '999',
    city: 'Paris',
    title: '7 noites, hotel 4 estrelas e café da manhã',
  },
  {
    src: '/images/vacation/img-ferias2.webp',
    price: '799',
    city: 'Suíça',
    title: '10 noites, hotel 5 estrelas, tudo incluído',
  },
  {
    src: '/images/vacation/img-ferias3.webp',
    price: '699',
    city: 'Tailândia',
    title: '7 noites, hotel 4 estrelas e café da manhã',
  },
  {
    src: '/images/vacation/img-ferias4.webp',
    price: '999',
    city: 'Nova York',
    title: '3 noites, hotel 4 estrelas, tudo incluído',
  },
  {
    src: '/images/vacation/img-ferias5.webp',
    price: '356',
    city: 'Itália',
    title: '1 noites, hotel 4 estrelas e café da manhã',
  },
  {
    src: '/images/vacation/img-ferias6.webp',
    price: '899',
    city: 'Paris',
    title: '5 noites, hotel 4 estrelas, tudo incluído',
  },
  {
    src: '/images/vacation/img-ferias7.webp',
    price: '999',
    city: 'Austrália',
    title: '4 noites, hotel 5 estrelas e café da manhã',
  },
  {
    src: '/images/vacation/img-ferias8.webp',
    price: '299',
    city: 'Londres',
    title: '1 noites, hotel 4 estrelas, tudo incluído',
  },
];

export default function AdminVocations() {
  const deleteVocations = () => {
    console.log('deletar destino');
  };

  return (
    <>
      <Head>
        <title>Administração - Ferias</title>
      </Head>
      <Layout subTitle="Lista de Pacotes de Ferias Cadastrados">
        <LayoutAdmim>
          <WrapperList>
            <WrapperHeader>
              <div>Local</div>
              <DivNone>Valor</DivNone>

              <div />
            </WrapperHeader>

            {packageVocation?.map((item) => (
              <WrapperMain key={item.city}>
                <div>{item.city}</div>
                <DivNone>{item.price}</DivNone>

                <WrapperButton>
                  <Buttons onClick={() => deleteVocations(item.id)} noPadding>
                    <span className="material-icons-outlined">delete</span>
                  </Buttons>
                  <Link href={`/usuario/editar-evento/${item.id}`}>
                    <Buttons noPadding>
                      <span className="material-icons-outlined">edit</span>
                    </Buttons>
                  </Link>
                </WrapperButton>
              </WrapperMain>
            ))}
          </WrapperList>
        </LayoutAdmim>
      </Layout>
    </>
  );
}
