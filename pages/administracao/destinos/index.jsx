import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
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
import CardImgLoad from '../../../components/CardImgLoad';

export default function AdminDestinations() {
  const [imgLoad, setImgLoad] = useState(true);
  const [destination, setDestination] = useState([]);

  const load = () => {
    apiProd
      .get('/destinations')
      .then((response) => {
        setDestination(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setImgLoad(false);
      });
  };
  useEffect(() => {
    load();
  }, []);

  const deleteDestination = (id) => {
    apiProd.delete(`/destinations/${id}`).then(() => {
      load();
    });
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
            {imgLoad && <CardImgLoad />}
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
                      <a href={`/administracao/destinos/editar/${item.id}`}>
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
