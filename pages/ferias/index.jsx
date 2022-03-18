import Head from 'next/head';
import { useState, useEffect } from 'react';
import CardImageIcon from '../../components/CardImageIcon';
import Layout from '../../components/Layout';
import CardPackage from '../../components/CardPackage';
import apiProd from '../../lib/apiProd';
import { WrapperMain } from '../../styles/vacation/style';
import CardImgLoad from '../../components/CardImgLoad';

export default function Vocation() {
  const [imgLoad, setImgLoad] = useState(true);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    apiProd
      .get('/packages')
      .then((response) => {
        setPackages(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setImgLoad(false);
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
        {imgLoad && <CardImgLoad />}
        <WrapperMain>
          {packages.map((item) => (
            <CardPackage
              src="/images/imgNeutra.webp"
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
