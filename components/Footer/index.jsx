import ReserveLane from '../ReserveLane';

import { WrapperInfo, Container, Info, Contact } from './style';

export default function Footer() {
  return (
    <Container>
      <ReserveLane />

      <WrapperInfo>
        <Info>
          <p>Rua: Olimpio Irinel Bianchete</p>
          <p>Alfredo Vasconcelos - MG 36272-000</p>
          <p>tripspainless@gmail.com</p>
          <p>Tel: (99) 9999-9999</p>
          <p>Fax: (99) 9999-9999</p>
          <h3>
            © 2022 por Trips Painless. Orgulhosamente criado por Ramom Oliveira.
          </h3>
        </Info>

        <Contact>
          <form>
            <div>
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="E-mail" />
              <input type="text" placeholder="Telefone" />
            </div>

            <div>
              <textarea
                name=""
                id=""
                placeholder="Digite sua mensagem aqui..."
              />
            </div>
          </form>
        </Contact>
      </WrapperInfo>
    </Container>
  );
}
