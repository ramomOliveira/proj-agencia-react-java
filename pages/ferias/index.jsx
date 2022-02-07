import Head from 'next/head';
import CardImageIcon from '../../components/CardImageIcon';
import Layout from '../../components/Layout';
import CardPackage from '../../components/CardPackage';

import { WrapperMain } from '../../styles/vacation/style';

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
          {packageVocation.map((item) => (
            <CardPackage
              src={item.src}
              price={item.price}
              city={item.city}
              title={item.title}
            />
          ))}
        </WrapperMain>
      </Layout>
    </>
  );
}
