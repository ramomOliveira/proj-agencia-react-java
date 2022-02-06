import Header from '../Header';
import Footer from '../Footer';
import NavBarMobile from '../NavBarMobile';

import { Cover } from './style';

export default function Layout({ children, subTitle, dNone }) {
  return (
    <>
      <Cover>
        <NavBarMobile />
        <Header dNone={dNone} subTitle={subTitle} />
        {children}
      </Cover>
      <Footer />
    </>
  );
}
