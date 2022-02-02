import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffffffc4;
  opacity: 0.8;
  padding: 40px;

  > div {
    display: grid;
    grid-template-columns: 45% 20% 35%;
    font-size: 20px;
    align-items: center;
    margin: 10px 0;

    > h1 {
      color: var(--blue);
    }
    > span {
      color: var(--gray);
    }
    > p {
      color: var(--blue);
    }
  }
`;
