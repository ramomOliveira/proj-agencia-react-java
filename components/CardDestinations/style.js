import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #ffffffc4;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: space-between;
  }
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

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const CardImg = styled.div`
  border: 8px solid var(--white);
`;
