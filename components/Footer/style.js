import styled from 'styled-components';

export const Container = styled.div``;

export const WrapperInfo = styled.div`
  padding: 30px 220px;
  background-color: var(--blue);
  display: grid;
  grid-template-columns: 40% 60%;
`;

export const Info = styled.div`
  color: var(--light-blue);
  font-size: 15px;
  line-height: 24px;

  > h3 {
    margin-top: 16px;
  }
`;

export const Contact = styled.div`
  > form {
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    > div {
      display: flex;
      flex-direction: column;
      gap: 16px;
      > input {
        border: 1px solid var(--white);
        padding: 11px;
        width: 280px;
      }
      > input::placeholder {
        color: var(--white);
        font-size: 15px;
      }
      > textarea {
        border: 1px solid var(--white);
        height: 100%;
      }
      > textarea::placeholder {
        color: var(--white);
        font-size: 15px;
      }
    }
  }
`;
