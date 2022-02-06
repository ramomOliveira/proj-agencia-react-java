import Link from 'next/link';
import { Container } from './style';

export default function CardLinks() {
  return (
    <Container>
      <ul>
        <div>
          <Link href="/">
            <a href="/">
              <li>Home</li>
            </a>
          </Link>
          <Link href="/destinos">
            <a href="/destinos">
              <li>Destinos</li>
            </a>
          </Link>
        </div>

        <div>
          <Link href="/ferias">
            <a href="/ferias">
              <li>Férias</li>
            </a>
          </Link>
          <Link href="/sobre">
            <a href="/sobre">
              <li>Sobre</li>
            </a>
          </Link>
        </div>

        <div>
          <Link href="/cadastrar">
            <button type="button">Cadastrar</button>
          </Link>
          <Link href="/painel">
            <button type="button">Entrar</button>
          </Link>
        </div>
      </ul>
    </Container>
  );
}
