import styled from 'styled-components';

export const WrapperList = styled.div`
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  box-shadow: 0px 3px 6px #2121214d;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 30px;
  color: var(--white);
`;

export const WrapperHeader = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  border-bottom: 2px solid #bdbdbd;
  padding: 10px 30px;
  text-transform: uppercase;
  font-weight: 700;

  @media (min-width: 768px) {
    grid-template-columns: 35% 35% 1fr;
  }
`;
export const WrapperMain = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  border-bottom: 1px solid #bdbdbd;
  padding: 10px 30px;
  align-items: center;
  font-size: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 35% 35% 1fr;
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DivNone = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;
