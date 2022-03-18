import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #ffffffc4;
  justify-content: space-between;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const WrapperDescription = styled.div`
  padding: 12px;
  > h1 {
    font-size: 25px;
    color: var(--blue);
    margin-bottom: 12px;
  }
  > p {
    font-size: 15px;
    color: var(--blue);

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const CardImg = styled.div`
  border: 8px solid var(--white);
`;

export const Img = styled.div`
  background-image: ${(props) => `url(${props.imgUrl})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 235px;
  min-height: 150px;
  height: 100%;
`;
