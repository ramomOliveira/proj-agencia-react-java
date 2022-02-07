import Header from '../Header';
import Footer from '../Footer';
import NavBarMobile from '../NavBarMobile';

import { Container, Cover } from './style';

export default function Layout({ children, subTitle, dNone }) {
  return (
    <Container>
      <Cover>
        <NavBarMobile />
        <Header dNone={dNone} subTitle={subTitle} />
        {children}
      </Cover>
      <Footer />
    </Container>
  );
}
