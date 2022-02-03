import styled from 'styled-components';

export const Container = styled.div``;

export const WrapperTips = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  align-items: center;

  > h1 {
    font-size: 25px;
    color: var(--white);
    text-align: center;
    text-transform: uppercase;
  }

  > div {
    display: flex;
    gap: 16px;
    margin: 20px 50px 20px 0;
  }
`;

export const WrapperMain = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
`;

export const AsideLeft = styled.div`
  padding-right: 50px;
  border-right: 2px dashed var(--white);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AsideRight = styled.div`
  padding-left: 50px;
`;
