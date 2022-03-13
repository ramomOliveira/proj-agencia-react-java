import Head from 'next/head';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import LayoutAdmim from '../../../../components/Admim/LayoutAdmim';
import Buttons from '../../../../components/Buttons';

import Layout from '../../../../components/Layout';

import {
  WrapperForm,
  WrapperButton,
  Wrapper,
} from '../../../../styles/admin-vocations/add/style';

export default function AddVocation() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const addVocation = () => {
    console.log('adicionado');

    reset();
    router.push('/administracao/ferias');
  };

  return (
    <>
      <Head>
        <title>Administração - Férias</title>
      </Head>
      <Layout subTitle="Adicione um Pacote de Férias">
        <LayoutAdmim>
          <WrapperForm onSubmit={handleSubmit(addVocation)}>
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
            </WrapperButton>
          </WrapperForm>
        </LayoutAdmim>
      </Layout>
    </>
  );
}
