import Header from '../Header';
import Footer from '../Footer';

import { Container, Cover, Wrapper } from './style';
import MenuBurger from '../MenuBurger';

export default function Layout({ children, subTitle, dNone }) {
  return (
    <Container>
      <Cover>
        <Wrapper className="margins">
          <MenuBurger />
          <Header dNone={dNone} subTitle={subTitle} />
          {children}
        </Wrapper>
      </Cover>
      <Footer className="margins" />
    </Container>
  );
}
