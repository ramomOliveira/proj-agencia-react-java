import { useState } from 'react';
import CardLinks from './CardLinks';
import { Container } from './style';

export default function NavBarMobile() {
  const [viewLinks, setViewLinks] = useState(false);
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <Container onClick={() => setViewLinks(true)}>
        <img src="/images/menu-mobile.svg" alt="" />
      </Container>

      {viewLinks ? <CardLinks /> : null}
    </div>
  );
}
