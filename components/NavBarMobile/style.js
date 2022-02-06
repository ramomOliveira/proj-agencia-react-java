import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  justify-content: flex-end;
  padding: 20px;
  cursor: pointer;
  width: 64px;
  height: 64px;

  @media (max-width: 768px) {
    display: flex;
  }
`;
