import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 15px dashed var(--white);

  > h1 {
    font-size: 53px;
    color: var(--white);
  }

  > div {
    display: flex;
    align-items: center;
    background-color: #ffffff66;
    padding: 20px;
    margin-top: 20px;

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
      color: var(--white);
      width: 35px;
      height: 35px;
    }
  }
`;
