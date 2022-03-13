import Head from 'next/head';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import LayoutAdmim from '../../../../components/Admim/LayoutAdmim';
import Buttons from '../../../../components/Buttons';
import apiProd from '../../../../lib/apiProd';

import Layout from '../../../../components/Layout';

import {
  WrapperForm,
  WrapperButton,
  Wrapper,
} from '../../../../styles/admin-vocations/add/style';

export default function EditVocation() {
  const router = useRouter();
  const [packageVocation, setPackageVocation] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  useEffect(() => {
    apiProd.get('/packages').then((response) => {
      setPackageVocation(response.data);
    });
  }, []);

  useEffect(() => {
    if (router.query.id) {
      apiProd.get(`/packages/${router.query.id}`).then(({ data }) => {
        setValue('place', data.place);
        setValue('unitaryValue', data.unitaryValue);
        setValue('description', data.description);
        setValue('daysHosted', data.daysHosted);
        setValue('includedPackage', data.includedPackage);
      });
    }
  }, [router]);

  const editPackageVocation = (data) => {
    apiProd
      .patch(`/packages/${router.query.id}`, {
        ...data,
      })
      .then(() => {
        router.push('/administracao/destinos');
      });
  };

  const deletePackageVocation = () => {
    apiProd.delete(`/packages/${router.query.id}`).then(() => {
      router.push('/administracao/destinos');
    });
  };

  return (
    <>
      <Head>
        <title>Administração - Destinos</title>
      </Head>
      <Layout subTitle="Adicione um Destino">
        <LayoutAdmim>
          <WrapperForm onSubmit={handleSubmit(editPackageVocation)}>
            <Wrapper>
              <h1>Informações</h1>
              <div>
                <div>
                  <h3>Local:</h3>
                  <input
                    type="text"
                    {...register('name', { required: false })}
                  />
                </div>
                <div>
                  <h3>Incluso:</h3>
                  <input
                    type="text"
                    {...register('includedPackage', { required: false })}
                  />
                </div>
              </div>
            </Wrapper>

            <Wrapper>
              <h1>Descrição</h1>
              <div>
                <textarea
                  rows="10"
                  {...register('description', { required: false })}
                />
              </div>
            </Wrapper>

            <Wrapper>
              <h1>Informações de Hospedagem</h1>
              <div>
                <div>
                  <h3>Quantas Noites:</h3>
                  <input
                    type="text"
                    {...register('daysHosted', { required: false })}
                  />
                </div>
                <div>
                  <h3>Quantas estrelas o hotel:</h3>
                  <input
                    type="text"
                    {...register('hotelStars', { required: false })}
                  />
                </div>
              </div>
            </Wrapper>

            <Wrapper>
              <h1>Informações Valores</h1>
              <div>
                <div>
                  <h3>Quantidade de pessoas:</h3>
                  <input
                    type="text"
                    {...register('amountPeople', { required: false })}
                  />
                </div>
                <div>
                  <h3>Valor do pacote:</h3>
                  <input
                    type="text"
                    {...register('price', { required: false })}
                  />
                </div>
              </div>
            </Wrapper>

            <WrapperButton>
              <Buttons type="submit">Adicionar</Buttons>
              <Buttons onClick={() => deletePackageVocation()} type="button">
                Deletar
              </Buttons>
            </WrapperButton>
          </WrapperForm>
        </LayoutAdmim>
      </Layout>
    </>
  );
}
