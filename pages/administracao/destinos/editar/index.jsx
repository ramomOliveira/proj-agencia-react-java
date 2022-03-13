import Head from 'next/head';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import LayoutAdmim from '../../../../components/Admim/LayoutAdmim';
import Buttons from '../../../../components/Buttons';

import Layout from '../../../../components/Layout';

import {
  WrapperForm,
  WrapperButton,
} from '../../../../styles/admin-destinations/add/style';

export default function EditDestination() {
  const router = useRouter();
  const [destinations, setDestinations] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    apiProd.get('/destinations').then((response) => {
      setDestinations(response.data);
    });
  }, []);

  useEffect(() => {
    if (router.query.id) {
      apiProd.get(`/coupons/${router.query.id}`).then(({ data }) => {
        setCoupons(data.result);
        setValue('name', data.result.name);
        setValue('discountPercentage', data.result.discountPercentage);
        setValue('categoryId', data.result.categoryId);
        setValue('maximumValue', data.result.maximumValue);
        setValue('minimumValue', data.result.minimumValue);
        setValue('quantity', data.result.quantity);
        setValue('startValidity', data.result.startValidity);
        setValue('endValidity', data.result.endValidity);
        setValue('isActive', data.result.isActive ? 'true' : 'false');
        console.log(data.result);
      });
    }
  }, [router]);

  const editCoupons = (data) => {
    apiProd
      .patch(`/coupons/${router.query.id}`, {
        ...data,
      })
      .then(() => {
        showModalSuccess('Alterações salvas com sucesso');
        router.push('/cupons');
      });
  };

  const deleteCoupons = () => {
    apiProd.delete(`/coupons/${router.query.id}`).then(() => {
      showModalSuccess('Cupom excluído com sucesso');
      router.push('/cupons');
    });
  };

  const addDestination = () => {
    console.log('adicionado');

    reset();
    router.push('/administracao/destinos');
  };

  return (
    <>
      <Head>
        <title>Administração - Destinos</title>
      </Head>
      <Layout subTitle="Adicione um Destino">
        <LayoutAdmim>
          <WrapperForm onSubmit={handleSubmit(addDestination)}>
            <div>
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
            </div>

            <div>
              <h1>Descrição</h1>
              <div>
                <textarea
                  rows="10"
                  {...register('description', { required: false })}
                />
              </div>
            </div>

            <div>
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
            </div>

            <WrapperButton>
              <Buttons type="submit">Adicionar</Buttons>
            </WrapperButton>
          </WrapperForm>
        </LayoutAdmim>
      </Layout>
    </>
  );
}
