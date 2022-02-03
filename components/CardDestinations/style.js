import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #ffffffc4;
`;

export const WrapperDescription = styled.div`
  padding: 12px;
  > h1 {
    font-size: 25px;
    color: var(--blue);
    margin-bottom: 12px;
  }
  > p {
    font-size: 15px;
    color: var(--blue);
  }
`;

export const CardImg = styled.div`
  border: 8px solid var(--white);
`;
