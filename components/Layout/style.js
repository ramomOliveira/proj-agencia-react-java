import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 200px;
`;

export const Cover = styled.div`
  padding: 0 200px;
  background-image: url('/images/cover.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;
