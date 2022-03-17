import Link from 'next/link';
import { Wrapper } from './style';

export default function ArrowBack({ href, hrefA }) {
  return (
    <Link href={href}>
      <a href={hrefA}>
        <Wrapper>
          <span className="material-icons-outlined">arrow_back</span>
        </Wrapper>
      </a>
    </Link>
  );
}
