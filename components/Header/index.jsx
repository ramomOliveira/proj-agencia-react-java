import Link from 'next/link';

import {
  WrapperLogo,
  Container,
  TitleH1,
  TitleH2,
  WrapperNavBar,
  WrapperRange,
} from './style';

export default function Header({ subTitle, dNone }) {
  return (
    <Container>
      <WrapperLogo>
        <img src="/images/logo.webp" alt="" />
        <TitleH1>Bon Voyage</TitleH1>
        <TitleH2>Melhores preços, Melhores férias</TitleH2>
      </WrapperLogo>

      <WrapperNavBar>
        <ul>
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

          <Link href="/ferias">
            <a href="/ferias">
              <li>Férias</li>
            </a>
          </Link>

          <Link href="/sobre">
            <a href="/sobre">
              <li>Quem somos</li>
            </a>
          </Link>

          <button type="button">Cadastrar</button>
          <button type="button">Entrar</button>
        </ul>
      </WrapperNavBar>

      <WrapperRange dNone={dNone}>{subTitle}</WrapperRange>
    </Container>
  );
}
