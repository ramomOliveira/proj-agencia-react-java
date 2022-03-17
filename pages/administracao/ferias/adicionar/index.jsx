import Head from 'next/head';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import LayoutAdmim from '../../../../components/Admim/LayoutAdmim';
import Buttons from '../../../../components/Buttons';
import Layout from '../../../../components/Layout';
import apiProd from '../../../../lib/apiProd';
import AlertMessage from '../../../../components/AlertMessage';
import ArrowBack from '../../../../components/ArrowBack';
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

  const addVocation = (data) => {
    apiProd
      .post('/packages', {
        ...data,
      })
      .then(() => {
        reset();
        router.push('/administracao/ferias');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Head>
        <title>Administração - Férias</title>
      </Head>
      <Layout subTitle="Adicione um Pacote de Férias">
        <LayoutAdmim>
          <ArrowBack
            href="/administracao/ferias"
            hrefA="/administracao/ferias"
          />
          <WrapperForm onSubmit={handleSubmit(addVocation)}>
            <Wrapper>
              <h1>Informações</h1>
              <div>
                <div>
                  <h3>Local:</h3>
                  <input
                    type="text"
                    {...register('name', { required: true })}
                  />
                  <AlertMessage>
                    {errors.name && 'Campo obrigatório'}
                  </AlertMessage>
                </div>
                <div>
                  <h3>Incluso:</h3>
                  <input
                    type="text"
                    {...register('includedPackage', { required: true })}
                  />
                  <AlertMessage>
                    {errors.name && 'Campo obrigatório'}
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
                  <h3>Quantas Noites:</h3>
                  <input
                    type="text"
                    {...register('daysHosted', { required: true })}
                  />
                  <AlertMessage>
                    {errors.daysHosted && 'Campo obrigatório'}
                  </AlertMessage>
                </div>
                <div>
                  <h3>Quantas estrelas o hotel:</h3>
                  <input
                    type="text"
                    {...register('hotelStars', { required: true })}
                  />
                  <AlertMessage>
                    {errors.hotelStars && 'Campo obrigatório'}
                  </AlertMessage>
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
                    {...register('amountPeople', { required: true })}
                  />
                  <AlertMessage>
                    {errors.amountPeople && 'Campo obrigatório'}
                  </AlertMessage>
                </div>
                <div>
                  <h3>Valor do pacote:</h3>
                  <input
                    type="text"
                    {...register('price', { required: true })}
                  />
                  <AlertMessage>
                    {errors.price && 'Campo obrigatório'}
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
