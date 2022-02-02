import { Button } from './style';

export default function Buttons({ children, size25, link, paddingLarge }) {
  return (
    <Button paddingLarge={paddingLarge} size25={size25} link={link}>
      {children}
    </Button>
  );
}
