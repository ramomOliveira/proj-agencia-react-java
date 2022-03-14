import styled from 'styled-components';

export const Container = styled.div`
  height: 250px;
  display: grid;
  grid-template-columns: ${(props) =>
    props.gridReverse ? '35% 65%' : '65% 35%'};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const WrapperIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 8px solid var(--white);
  border-left: ${(props) =>
    props.borderLeft ? '8px solid var(--white)' : 'none'};
  border-right: ${(props) =>
    props.borderRight ? '8px solid var(--white)' : 'none'};

  > button {
    margin: 10px 0;
  }

  > h1 {
    color: var(--white);
    font-size: ${(props) => (props.size25 ? '25px' : '20px')};
    margin: 10px 0;
    text-align: center;
  }
`;
