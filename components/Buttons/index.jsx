import { Button } from './style';

export default function Buttons({
  children,
  size25,
  link,
  paddingLarge,
  onClick,
  type = 'button',
}) {
  return (
    <Button
      onClick={onClick}
      paddingLarge={paddingLarge}
      size25={size25}
      link={link}
      type={type}
    >
      {children}
    </Button>
  );
}
