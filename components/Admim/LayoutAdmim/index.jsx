import Link from 'next/link';
import { Container, AsideLeft, AsideRight } from './style';

export default function LayoutAdmim({ children }) {
  return (
    <Container>
      <AsideLeft>
        <ul>
          <Link href="/administracao/destinos">
            <a href="/administracao/destinos">
              <li>Destinos</li>
            </a>
          </Link>

          <Link href="/administracao/ferias">
            <a href="/administracao/ferias">
              <li>Pacotes ferias</li>
            </a>
          </Link>
        </ul>
      </AsideLeft>

      <AsideRight>{children}</AsideRight>
    </Container>
  );
}
