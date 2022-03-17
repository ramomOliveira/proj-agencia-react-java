import Head from 'next/head';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import LayoutAdmim from '../../../../components/Admim/LayoutAdmim';
import Buttons from '../../../../components/Buttons';
import apiProd from '../../../../lib/apiProd';
import AlertMessage from '../../../../components/AlertMessage';
import Layout from '../../../../components/Layout';
import ArrowBack from '../../../../components/ArrowBack';

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
    setValue,
  } = useForm();

  useEffect(() => {
    if (router.query.id) {
      apiProd.get(`/packages/${router.query.id}`).then(({ data }) => {
        setPackageVocation(data);
        setValue('name', data.name);
        setValue('includedPackage', data.includedPackage);
        setValue('description', data.description);
        setValue('daysHosted', data.daysHosted);
        setValue('hotelStars', data.hotelStars);
        setValue('amountPeople', data.amountPeople);
        setValue('price', data.price);
      });
    }
  }, [router]);

  const editPackageVocation = (data) => {
    apiProd
      .put(`/packages/${router.query.id}`, {
        ...data,
      })
      .then(() => {
        router.push('/administracao/ferias');
      });
  };

  const deletePackageVocation = () => {
    apiProd.delete(`/packages/${router.query.id}`).then(() => {
      router.push('/administracao/ferias');
    });
  };

  return (
    <>
      <Head>
        <title>Administração - Pacote de Férias</title>
      </Head>
      <Layout subTitle="Edite ou Delete um Pacote">
        <LayoutAdmim>
          <ArrowBack
            href="/administracao/ferias"
            hrefA="/administracao/ferias"
          />
          <WrapperForm onSubmit={handleSubmit(editPackageVocation)}>
            <Wrapper>
              <h1>{`Informações do pacote ${packageVocation.name}`}</h1>
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
              <Buttons type="submit">Salvar Alterações</Buttons>
              <Buttons onClick={deletePackageVocation} type="button">
                Deletar
              </Buttons>
            </WrapperButton>
          </WrapperForm>
        </LayoutAdmim>
      </Layout>
    </>
  );
}
