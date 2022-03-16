import Head from 'next/head';
import { useState, useEffect } from 'react';
import CardImageIcon from '../../components/CardImageIcon';
import Layout from '../../components/Layout';
import CardPackage from '../../components/CardPackage';
import apiProd from '../../lib/apiProd';
import { WrapperMain } from '../../styles/vacation/style';

const arrayImg = [
  '/images/vacation/img-ferias1.webp',
  '/images/vacation/img-ferias2.webp',
  '/images/vacation/img-ferias3.webp',
  '/images/vacation/img-ferias4.webp',
  '/images/vacation/img-ferias5.webp',
  '/images/vacation/img-ferias6.webp',
  '/images/vacation/img-ferias7.webp',
  '/images/vacation/img-ferias8.webp',
];

const randomImg = Math.floor(Math.random() * arrayImg.length);

export default function Vocation() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    apiProd.get('/packages').then((response) => {
      setPackages(response.data);
    });
  }, []);

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
          {packages.map((item) => (
            <CardPackage
              src={arrayImg[randomImg]}
              price={item.price}
              city={item.name}
              title={`${item.daysHosted} noites, hotel ${item.hotelStars} estrelas, ${item.includedPackage}`}
            />
          ))}
        </WrapperMain>
      </Layout>
    </>
  );
}
