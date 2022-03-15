import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LayoutAdmim from '../../../components/Admim/LayoutAdmim';
import Buttons from '../../../components/Buttons';
import apiProd from '../../../lib/apiProd';

import Layout from '../../../components/Layout';

import {
  WrapperList,
  WrapperHeader,
  DivNone,
  WrapperMain,
  WrapperButton,
} from '../../../styles/admin-destinations/style';

const arrayDestinations = [
  {
    title: 'Dinamarca',
    description:
      'A Dinamarca, que não estava no ranking dos 7 países com melhor qualidade de vida da Europa em 2020, ficou com o primeiro lugar europeu em 2021 e a segunda colocação global na pesquisa.',
    price: 'R$ 222,22',
  },
  {
    title: 'África',
    description:
      'Com uma área enorme e uma biodiversidade, viagens para a África são muito procuradas pelos safáris — especialmente nos desertos e savanas, os biomas mais lembrados usualmente. ',
    price: 'R$ 222,22',
  },
  {
    title: 'Ásia',
    description:
      'Praias paradisíacas, montanhas, roteiros culturais, gastronómicos… vai encontrar tudo por lá! Venha descobrir os melhores destinos de férias na Ásia.',
    price: 'R$ 222,22',
  },
  {
    title: 'Austrália',
    description:
      'O clima tropical é muito parecido com o de algumas regiões brasileiras, o povo é bastante hospitaleiro, as praias favorecem a prática de surfe e o dólar australiano sai mais barato que o americano.',
    price: 'R$ 222,22',
  },
  {
    title: 'Canadá',
    description:
      'O Canadá está recheado de atrações turísticas para todos os gostos e bolsos. Não importa se você estará sozinho, com amigos ou em família. Opções não faltam, seja no calor do verão ou no inverno, com muita neve.',
    price: 'R$ 222,22',
  },
];
export default function AdminDestinations() {
  const [destination, setDestination] = useState([]);
  const router = useRouter();
  useEffect(() => {
    apiProd
      .get('/destinations')
      .then((response) => {
        setDestination(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteDestination = () => {
    apiProd.delete(`/destinations/${router.query.id}`);
  };
  return (
    <>
      <Head>
        <title>Administração - Destinos</title>
      </Head>
      <Layout subTitle="Lista de Destinos Cadastrados">
        <LayoutAdmim>
          <Link href="/administracao/destinos/adicionar">
            <Buttons>
              <a href="/administracao/destinos/adicionar">Adicionar Destinos</a>
            </Buttons>
          </Link>
          <WrapperList>
            <WrapperHeader>
              <div>Local</div>
              <DivNone>Valor</DivNone>

              <div />
            </WrapperHeader>

            {destination.map((item) => (
              <WrapperMain key={item.id}>
                <div>{item.place}</div>
                <DivNone>{item.unitaryValue}</DivNone>

                <WrapperButton>
                  <Buttons onClick={() => deleteDestination(item.id)} noPadding>
                    <span className="material-icons-outlined">delete</span>
                  </Buttons>
                  <Link href={`/administracao/destinos/editar/${item.id}`}>
                    <Buttons noPadding>
                      <a href="/administracao/destinos/editar">
                        <span className="material-icons-outlined">edit</span>
                      </a>
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
