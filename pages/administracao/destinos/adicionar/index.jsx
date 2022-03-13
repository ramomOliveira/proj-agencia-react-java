import Head from 'next/head';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import LayoutAdmim from '../../../../components/Admim/LayoutAdmim';

import Layout from '../../../../components/Layout';

import {
  WrapperForm,
  WrapperButton,
} from '../../../../styles/admin-destinations/add/style';

export default function AddDestination() {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  return (
    <>
      <Head>
        <title>Administração - Destinos</title>
      </Head>
      <Layout subTitle="Lista de Destinos Cadastrados">
        <LayoutAdmim>
          <WrapperForm onSubmit={handleSubmit(addEvent)}>
            <div>
              <h1>Informações do Evento</h1>
              <div>
                <div>
                  <h3>Nome:</h3>
                  <input
                    type="text"
                    {...register('name', { required: true })}
                  />
                </div>
                <div>
                  <h3>Horário:</h3>
                  <input
                    type="text"
                    {...register('hourEvent', { required: false })}
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
              <h1>Endereço</h1>
              <div>
                <div>
                  <h3>Cidade:</h3>
                  <input
                    type="text"
                    {...register('city', { required: false })}
                  />
                </div>
                <div>
                  <h3>Estado:</h3>
                  <input
                    type="text"
                    {...register('stateUf', { required: false })}
                  />
                </div>
              </div>

              <div>
                <div>
                  <h3>Rua:</h3>
                  <input
                    type="text"
                    {...register('address', { required: false })}
                  />
                </div>
                <div>
                  <h3>Bairro:</h3>
                  <input
                    type="text"
                    {...register('district', { required: false })}
                  />
                </div>
              </div>

              <div>
                <div>
                  <h3>Número:</h3>
                  <input
                    type="text"
                    {...register('number', { required: false })}
                  />
                </div>
                <div>
                  <h3>Data:</h3>
                  <input
                    type="text"
                    {...register('dateEvent', { required: false })}
                  />
                </div>
              </div>
            </div>

            <div>
              <h1>Informações de contato</h1>
              <div>
                <div>
                  <h3>Celular:</h3>
                  <input
                    type="text"
                    {...register('tel', { required: false })}
                  />
                </div>
                <div>
                  <h3>E-mail:</h3>
                  <input
                    type="text"
                    {...register('email', { required: false })}
                  />
                </div>
              </div>
            </div>

            <WrapperButton>
              <Button type="submit">Salvar Alterações</Button>
            </WrapperButton>
          </WrapperForm>
        </LayoutAdmim>
      </Layout>
    </>
  );
}
