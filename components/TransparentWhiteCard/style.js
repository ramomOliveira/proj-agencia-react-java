import styled from 'styled-components';

export const Container = styled.div`
  color: var(--blue);
  font-size: 20px;
  background-color: #ffffff66;
  padding: ${(props) => (props.paddingSmall ? '20px' : '20px 90px')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  text-align: center;

  > h3 {
    display: ${(props) => (props.dNone ? 'none' : 'flex')};
    margin-top: 25px;
    color: var(--white);
  }
`;
