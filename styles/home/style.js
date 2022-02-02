import styled from 'styled-components';

export const ContainerHeader = styled.div`
  display: grid;
  gap: 45px;
  grid-template-columns: 31% 1fr;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const WrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    padding: 0;
    margin: 30px 0;
    color: var(--white);
    font-size: 20px;
  }
`;

export const Icons = styled.div`
  border-top: 2px dashed var(--white);
  border-bottom: 2px dashed var(--white);
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 22px;

  > img {
    width: 22px;
    height: 22px;
  }
`;

export const WrapperSearch = styled.div`
  margin: 45px 0 16px 0;
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--green);
  padding: 11px;
`;

export const Welcome = styled.div`
  border: 2px solid var(--white);
  padding: 11px;
  text-transform: uppercase;
  color: var(--white);
  font-size: 15px;
  display: flex;
  justify-content: center;
`;

export const WrapperRight = styled.div`
  padding: 11px;
  border: 8px solid var(--white);
  > h3 {
    font-size: 53px;
    color: var(--white);
    text-transform: uppercase;
  }

  > div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 16px;

    > p {
      color: var(--white);
      font-size: 20px;
    }

    > span {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--green);
      border: 3px solid var(--white);
      border-radius: 50%;
      font-size: 18px;
      color: var(--white);
      width: 35px;
      height: 35px;
    }
  }
  @media (max-width: 768px) {
    > h3 {
      font-size: 30px;
    }
  }
`;

export const WrapperAside = styled.div`
  margin-top: 60px;
  padding-bottom: 100px;
  display: grid;
  grid-template-columns: 55% 40%;
  gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 15px;
  }
`;

export const AsideLeft = styled.div`
  border-right: 2px dashed var(--white);
  padding-right: 90px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    border-right: none;
    padding-right: 0px;
  }
`;

export const WrapperBoxIcon = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const BoxIcon = styled.div`
  display: flex;
  width: min-content;
  padding: 4px;
  border: 5px solid #ffffff66;
`;

export const AsideRight = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;
