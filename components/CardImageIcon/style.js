import styled from 'styled-components';

export const Container = styled.div`
  border: 8px solid var(--white);
  height: 250px;
  display: flex;
`;

export const Carrossel = styled.div`
  background-image: url('/images/img-carrossel.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-right: 8px solid var(--white);
  width: 65%;
`;

export const CarrosselReverse = styled.div`
  background-image: url('/images/img-carrossel.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-left: 8px solid var(--white);
  width: 65%;
`;

export const WrapperIcon = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > button {
    margin: 10px 0;
  }

  > h1 {
    color: var(--white);
    font-size: ${(props) => (props.size25 ? '25px' : '20px')};
    margin: 10px 0;
  }
`;
