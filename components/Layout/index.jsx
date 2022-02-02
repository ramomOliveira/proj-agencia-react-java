import Header from '../Header';
import Footer from '../Footer';

import { Cover } from './style';

export default function Layout({ children, subTitle, dNone }) {
  return (
    <>
      <Cover>
        <Header dNone={dNone} subTitle={subTitle} />
        {children}
      </Cover>
      <Footer />
    </>
  );
}
