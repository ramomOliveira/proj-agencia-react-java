import styled from 'styled-components';

export const Container = styled.div``;

export const WrapperTips = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  align-items: center;
  margin: 30px 0;

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
  padding-bottom: 100px;
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
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CardGreen = styled.div`
  color: var(--white);
  font-size: 20px;
  text-align: center;
  background-color: var(--green);
  padding: 46px 23px;
  line-height: 24px;
`;

export const CardHelp = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  > p {
    color: var(--white);
    font-size: 25px;
    background-color: #ffffff66;
    padding: 20px;
  }
  > div {
    border: 5px solid var(--white);
    padding: 4px;
  }
`;

export const Card0800 = styled.div`
  background-color: #ffffffc4;
  line-height: 24px;
  color: var(--blue);
  padding: 36px 18px;
  text-align: center;

  > p {
    font-size: 15px;
  }
  > h1 {
    margin-top: 16px;
    font-size: 25px;
  }
`;
export const BorderBottom = styled.div`
  border-bottom: 15px dashed var(--white);
`;
