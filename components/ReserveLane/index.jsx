import Buttons from '../Buttons';

import { Container } from './style';

export default function ReserveLane() {
  return (
    <Container>
      <h1>Reserve suas férias agora </h1>
      <div>
        <Buttons paddingLarge size25>
          Reservar
        </Buttons>
      </div>
    </Container>
  );
}
