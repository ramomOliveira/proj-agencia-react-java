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
} from '../../../../styles/admin-destinations/add/style';

export default function EditDestination() {
  const router = useRouter();
  const [destinations, setDestinations] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  useEffect(() => {
    apiProd.get('/destinations').then((response) => {
      setDestinations(response.data);
    });
  }, []);

  useEffect(() => {
    if (router.query.id) {
      apiProd.get(`/destinations/${router.query.id}`).then(({ data }) => {
        setValue('place', data.place);
        setValue('unitaryValue', data.unitaryValue);
        setValue('description', data.description);
        setValue('daysHosted', data.daysHosted);
        setValue('includedPackage', data.includedPackage);
      });
    }
  }, [router]);

  const editDestination = (data) => {
    apiProd
      .patch(`/destinations//${router.query.id}`, {
        ...data,
      })
      .then(() => {
        router.push('/administracao/destinos');
      });
  };

  const deleteDestination = () => {
    apiProd.delete(`/destinations//${router.query.id}`).then(() => {
      router.push('/administracao/destinos');
    });
  };

  return (
    <>
      <Head>
        <title>Administração - Destinos</title>
      </Head>
      <Layout subTitle="Edite ou Delete um Destino">
        <LayoutAdmim>
          <WrapperForm onSubmit={handleSubmit(editDestination)}>
            <Wrapper>
              <h1>Informações</h1>
              <div>
                <div>
                  <h3>Local:</h3>
                  <input
                    type="text"
                    {...register('place', { required: false })}
                  />
                </div>
                <div>
                  <h3>Valor por pessoas:</h3>
                  <input
                    type="text"
                    {...register('unitaryValue', { required: false })}
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
                  <h3>Dias:</h3>
                  <input
                    type="text"
                    {...register('daysHosted', { required: false })}
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

            <WrapperButton>
              <Buttons type="submit">Adicionar</Buttons>
              <Buttons onClick={() => deleteDestination()} type="button">
                Deletar
              </Buttons>
            </WrapperButton>
          </WrapperForm>
        </LayoutAdmim>
      </Layout>
    </>
  );
}
