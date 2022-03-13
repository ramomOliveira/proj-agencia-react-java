import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  padding-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AsideLeft = styled.div`
  width: 20%;
  > ul {
    > a > li {
      font-size: 20px;
      color: var(--white);
      text-transform: uppercase;
      padding: 10px 0 0 20px;

      :hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;

    > ul {
      display: flex;
      > a > li {
        text-decoration: underline;
      }
    }
  }
`;

export const AsideRight = styled.div`
  width: 100%;
  @media (max-width: 768px) {
  }
`;
