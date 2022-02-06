import styled from 'styled-components';

export const WrapperMain = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 50px;
  padding-bottom: 100px;

  @media (max-width: 768px) {
    margin-top: 5px;
    gap: 8px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
