import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';
import Buttons from '../Buttons';
import { styles, Container } from './style';

export default function MenuBurger() {
  return (
    <Container className="margins">
      <Menu styles={styles}>
        <a href="/">
          <Link href="/">Home</Link>
        </a>

        <a href="/destinos">
          <Link href="/destinos">Destinos </Link>
        </a>

        <a href="/ferias">
          <Link href="/ferias">Férias</Link>
        </a>

        <a href="/sobre">
          <Link href="/sobre">Quem somos</Link>
        </a>

        <Buttons type="button">
          <Link href="/administracao/destinos">Administração</Link>
        </Buttons>
      </Menu>
    </Container>
  );
}
