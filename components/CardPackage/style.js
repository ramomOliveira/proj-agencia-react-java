import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffffffc4;
  width: 235px;
`;

export const TitleH1 = styled.h1`
  font-size: 53px;
  color: var(--blue);
  margin-bottom: 15px;
`;

export const TitleH2 = styled.h2`
  font-size: 20px;
  color: var(--blue);
  margin-bottom: 10px;
`;

export const TitleH3 = styled.h3`
  font-size: 17px;
  color: var(--blue);
  margin-bottom: 15px;
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  > p {
    font-size: 13px;
    color: var(--blue);
  }

  > div {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 15px;
    > h3 {
      margin-bottom: 0;
    }
  }
`;
