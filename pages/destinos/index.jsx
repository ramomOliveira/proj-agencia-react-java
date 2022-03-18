import Head from 'next/head';
import { useState, useEffect } from 'react';
import CardImageIcon from '../../components/CardImageIcon';
import Layout from '../../components/Layout';
import TransparentWhiteCard from '../../components/TransparentWhiteCard';
import { BoxIcon } from '../../styles/home/style';
import CardDestinations from '../../components/CardDestinations';
import apiProd from '../../lib/apiProd';
import CardImgLoad from '../../components/CardImgLoad';

import {
  WrapperTips,
  WrapperMain,
  AsideLeft,
  AsideRight,
  CardGreen,
  CardHelp,
  Card0800,
  BorderBottom,
} from '../../styles/destinations/style';

export default function Destinations() {
  const [imgLoad, setImgLoad] = useState(true);
  const [destination, setDestinations] = useState([]);

  useEffect(() => {
    apiProd
      .get('/destinations')
      .then((response) => {
        setDestinations(response.data);
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
        <title>Destinos</title>
      </Head>
      <Layout subTitle="Destinos">
        <CardImageIcon
          borderRight
          srcIcon="/images/bolsa-img.webp"
          nameButton="Começar"
          subTitle="A aventura"
        />

        <WrapperTips>
          <div>
            <TransparentWhiteCard dNone>Destinos de verão</TransparentWhiteCard>
            <BoxIcon>
              <img src="/images/icon-aviao.webp" alt="" />
            </BoxIcon>
          </div>

          <h1>Dicas e sugestões de hotéis e passeios</h1>
        </WrapperTips>

        <WrapperMain>
          <AsideLeft>
            {imgLoad && <CardImgLoad />}
            {destination.map((item) => (
              <CardDestinations
                title={item.place}
                description={item.description}
                src="/images/imgNeutra.webp"
              />
            ))}
          </AsideLeft>

          <AsideRight>
            <CardGreen>
              <p>
                A Trips Painless oferece informações sobre uma grande variedade
                de destinos. Saiba mais sobre o seu hoje mesmo e peça um
                orçamento
              </p>
            </CardGreen>

            <CardHelp>
              <p>Quer ajuda?</p>

              <div>
                <img src="images/icon-boia.webp" alt="" />
              </div>
            </CardHelp>

            <BorderBottom>
              <Card0800>
                <p>
                  Reserbar uma grande viagem é algo empolgante, mas também
                  cansativo. Nós entendemos. É por isso que oferecemos nossos
                  especialistas para fazer da sua viagem algo tranquilo e
                  incrível
                </p>
                <h1>Entre em contato 0800-000-0000</h1>
              </Card0800>
            </BorderBottom>
          </AsideRight>
        </WrapperMain>
      </Layout>
    </>
  );
}
