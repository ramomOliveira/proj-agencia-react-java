import Head from 'next/head';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import LayoutAdmim from '../../../../components/Admim/LayoutAdmim';
import Buttons from '../../../../components/Buttons';
import apiProd from '../../../../lib/apiProd';
import AlertMessage from '../../../../components/AlertMessage';

import Layout from '../../../../components/Layout';

import {
  WrapperForm,
  WrapperButton,
  Wrapper,
} from '../../../../styles/admin-destinations/add/style';
import ArrowBack from '../../../../components/ArrowBack';

export default function AddDestination() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const addDestination = (data) => {
    apiProd
      .post('/destinations', {
        ...data,
      })
      .then(() => {
        reset();
        router.push('/administracao/destinos');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Head>
        <title>Administração - Destinos</title>
      </Head>
      <Layout subTitle="Adicione um Destino">
        <LayoutAdmim>
          <ArrowBack />
          <WrapperForm onSubmit={handleSubmit(addDestination)}>
            <Wrapper>
              <h1>Informações</h1>
              <div>
                <div>
                  <h3>Local:</h3>
                  <input
                    type="text"
                    {...register('place', { required: true })}
                  />
                  <AlertMessage>
                    {errors.place && 'Campo obrigatório'}
                  </AlertMessage>
                </div>
                <div>
                  <h3>Valor por pessoas:</h3>
                  <input
                    type="text"
                    {...register('unitaryValue', { required: true })}
                  />
                  <AlertMessage>
                    {errors.unitaryValue && 'Campo obrigatório'}
                  </AlertMessage>
                </div>
              </div>
            </Wrapper>

            <Wrapper>
              <h1>Descrição</h1>
              <div>
                <textarea
                  rows="10"
                  {...register('description', { required: true })}
                />
              </div>
              <AlertMessage>
                {errors.description && 'Campo obrigatório'}
              </AlertMessage>
            </Wrapper>

            <Wrapper>
              <h1>Informações de Hospedagem</h1>
              <div>
                <div>
                  <h3>Dias:</h3>
                  <input
                    type="text"
                    {...register('daysHosted', { required: true })}
                  />
                  <AlertMessage>
                    {errors.daysHosted && 'Campo obrigatório'}
                  </AlertMessage>
                </div>
                <div>
                  <h3>Incluso:</h3>
                  <input
                    type="text"
                    {...register('includedPackage', { required: true })}
                  />
                  <AlertMessage>
                    {errors.includedPackage && 'Campo obrigatório'}
                  </AlertMessage>
                </div>
              </div>
            </Wrapper>

            <WrapperButton>
              <Buttons type="submit">Adicionar</Buttons>
            </WrapperButton>
          </WrapperForm>
        </LayoutAdmim>
      </Layout>
    </>
  );
}
