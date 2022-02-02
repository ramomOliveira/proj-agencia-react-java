import styled from 'styled-components';

export const Container = styled.div``;

export const Button = styled.button`
  text-transform: uppercase;
  font-size: ${(props) => (props.size25 ? '25px' : '16px')};
  background: ${(props) => (props.link ? 'none' : 'var(--green)')};
  color: ${(props) => (props.link ? 'var(--green)' : 'var(--white)')};
  padding: ${(props) => (props.paddingLarge ? '12px 60px' : '10px')};
`;
