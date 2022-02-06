import Head from 'next/head';
import Buttons from '../components/Buttons';
import CardPriceWhite from '../components/CardPriceWhite';
import Layout from '../components/Layout';
import TransparentWhiteCard from '../components/TransparentWhiteCard';
import CardPriceOffer from '../components/UtilesHome/CardPriceOffer';

import {
  WrapperLeft,
  ContainerHeader,
  Icons,
  WrapperSearch,
  WrapperButton,
  Welcome,
  WrapperRight,
  BoxIcon,
  WrapperBoxIcon,
  WrapperAside,
  AsideRight,
  AsideLeft,
} from '../styles/home/style';

const cityOffer = [
  {
    city: 'Paris romântica',
    range: '------',
    price: 'RS 356,00',
  },
  {
    city: 'Sri Lanka',
    range: '------',
    price: 'RS 456,00',
  },
  {
    city: 'Toscana e Provença',
    range: '------',
    price: 'RS 879,00',
  },
  {
    city: 'Flórida express',
    range: '------',
    price: 'RS 540,00',
  },
  {
    city: 'Fuga pana NY',
    range: '------',
    price: 'RS 999,00',
  },
];

const citySummer = [
  {
    city: 'Barcelona',
    range: '------',
    price: 'RS 756,00',
  },
  {
    city: 'Uruguai',
    range: '------',
    price: 'RS 898,00',
  },
  {
    city: 'Vancouver',
    range: '------',
    price: 'RS 879,00',
  },
  {
    city: 'Milão',
    range: '------',
    price: 'RS 790,00',
  },
  {
    city: 'Moscow',
    range: '------',
    price: 'RS 899,00',
  },
];

const offer = [
  {
    priceOffer: '674',
    merchanOffer: 'Refúgio romântico em Provença',
  },
  {
    priceOffer: '474',
    merchanOffer: 'Cruzeiro no Alasca 8 noites Tudo Incluído',
  },
  {
    priceOffer: '897',
    merchanOffer: 'Cancún Resort e Spa 4 noites Tudo Incluído',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Agência de Viagem - Home</title>
      </Head>
      <Layout dNone>
        <ContainerHeader>
          <WrapperLeft>
            <Icons>
              <img src="/images/ico-twiter.webp" alt="" />
              <img src="/images/ico-twiter.webp" alt="" />
              <img src="/images/ico-twiter.webp" alt="" />
            </Icons>

            <WrapperSearch>
              <img src="/images/ico-bino.webp" alt="" />
            </WrapperSearch>
            <WrapperButton>
              <Buttons size25>Buscar</Buttons>
            </WrapperButton>

            <p>Suas Férias</p>

            <Welcome>Bem-vindos ao nosso mundo</Welcome>
          </WrapperLeft>

          <WrapperRight>
            <h3>
              Veja o quanto você pode economizar com nossas tarifas de ultima
              hora
            </h3>
            <div>
              <p>Ver detalhes</p>
              <span>+</span>
            </div>
          </WrapperRight>
        </ContainerHeader>

        <WrapperAside>
          <AsideLeft>
            <WrapperBoxIcon>
              <TransparentWhiteCard dNone>
                Oferta selecionadas
              </TransparentWhiteCard>
              <BoxIcon>
                <img src="/images/icon-relogio.webp" alt="" />
              </BoxIcon>
            </WrapperBoxIcon>

            <CardPriceWhite>
              {cityOffer.map((item) => (
                <div key={item.city}>
                  <h1>{item.city}</h1>
                  <span>{item.range}</span>
                  <p>{item.price}</p>
                </div>
              ))}
            </CardPriceWhite>

            <WrapperBoxIcon>
              <TransparentWhiteCard dNone>
                Destinos de verão
              </TransparentWhiteCard>
              <BoxIcon>
                <img src="/images/icon-aviao.webp" alt="" />
              </BoxIcon>
            </WrapperBoxIcon>

            <CardPriceWhite>
              {citySummer.map((item) => (
                <div key={item.city}>
                  <h1>{item.city}</h1>
                  <span>{item.range}</span>
                  <p>{item.price}</p>
                </div>
              ))}
            </CardPriceWhite>
          </AsideLeft>

          <AsideRight>
            {offer.map((item) => (
              <CardPriceOffer
                key={item.merchanOffer}
                priceOffer={item.priceOffer}
                merchanOffer={item.merchanOffer}
              />
            ))}
          </AsideRight>
        </WrapperAside>
      </Layout>
    </>
  );
}
