import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  justify-content: flex-end;

  > ul {
    display: flex;
    gap: 5px;
    align-items: center;

    > div {
      display: flex;
      flex-direction: column;
      gap: 5px;

      > a {
        color: var(--white);
        border: 1px solid var(--white);
        padding: 3px;
      }

      > button {
        color: var(--white);
        border: 1px solid var(--white);
        padding: 3px;
        background-color: transparent;
      }
    }
  }
`;
