import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--green);
  padding: 25px 220px;

  > h1 {
    font-size: 25px;
    color: var(--blue);
    text-transform: uppercase;
  }
  > div {
    border: 4px solid var(--white);
  }

  @media (max-width: 768px) {
    padding: 16px 24px;
    text-align: center;
    flex-direction: column;
    gap: 20px;
  }
`;
