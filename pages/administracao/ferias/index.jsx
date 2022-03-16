import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import LayoutAdmim from '../../../components/Admim/LayoutAdmim';
import Buttons from '../../../components/Buttons';
import apiProd from '../../../lib/apiProd';
import Layout from '../../../components/Layout';
import CardImgLoad from '../../../components/CardImgLoad';

import {
  WrapperList,
  WrapperHeader,
  DivNone,
  WrapperMain,
  WrapperButton,
} from '../../../styles/admin-vocations/style';

export default function AdminVocations() {
  const [imgLoad, setImgLoad] = useState(true);
  const [packages, setPackages] = useState([]);

  const load = () => {
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
  };
  useEffect(() => {
    load();
  }, []);

  const deleteVocations = (id) => {
    apiProd.delete(`/packages/${id}`).then(() => {
      load();
    });
  };

  return (
    <>
      <Head>
        <title>Administração - Ferias</title>
      </Head>
      <Layout subTitle="Lista de Pacotes de Ferias Cadastrados">
        <LayoutAdmim>
          <Link href="/administracao/ferias/adicionar">
            <Buttons>
              <a href="/administracao/ferias/adicionar">
                Adicionar Pacote de Ferias
              </a>
            </Buttons>
          </Link>
          <WrapperList>
            <WrapperHeader>
              <div>Local</div>
              <DivNone>Valor</DivNone>

              <div />
            </WrapperHeader>
            {imgLoad && <CardImgLoad />}
            {packages?.map((item) => (
              <WrapperMain key={item.id}>
                <div>{item.name}</div>
                <DivNone>{item.price}</DivNone>

                <WrapperButton>
                  <Buttons onClick={() => deleteVocations(item.id)} noPadding>
                    <span className="material-icons-outlined">delete</span>
                  </Buttons>
                  <Link href={`/administracao/ferias/editar/${item.id}`}>
                    <Buttons noPadding>
                      <a href={`/administracao/ferias/editar/${item.id}`}>
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
