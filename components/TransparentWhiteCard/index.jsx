import { Container } from './style';

export default function TransparentWhiteCard({
  children,
  paddingSmall,
  author,
  dNone,
}) {
  return (
    <Container dNone={dNone} paddingSmall={paddingSmall}>
      {children}
      <h3>- {author} -</h3>
    </Container>
  );
}
