import styled from 'styled-components';

export const Container = styled.div``;

export const Cover = styled.div`
  background-image: url('/images/cover.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 0 200px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;
