import Header from '../Header';
import Footer from '../Footer';
import NavBarMobile from '../NavBarMobile';

import { Container, Cover, Wrapper } from './style';
import MenuBurger from '../MenuBurger';

export default function Layout({ children, subTitle, dNone }) {
  return (
    <Container>
      <Cover>
        <Wrapper>
          <MenuBurger />
          <Header dNone={dNone} subTitle={subTitle} />
          {children}
        </Wrapper>
      </Cover>
      <Footer />
    </Container>
  );
}
