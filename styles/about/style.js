import styled from 'styled-components';

export const WrapperTop = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: 10px;
  }
`;

export const WrapperAbout = styled.div`
  border-right: 2px dashed var(--white);
  padding-right: 40px;

  @media (max-width: 768px) {
    border-right: none;
    padding-right: 0;
    margin-bottom: 10px;
  }
`;

export const ImgAbout = styled.div`
  border: 8px solid var(--white);
  background-image: url('/images/img-sobre.webp');
  background-repeat: no-repeat;
  background-size: cover;
  height: 194px;
`;
export const InfoAbout = styled.div`
  background-color: #ffffffc4;
  color: var(--blue);
  padding: 0 22px;

  > h1 {
    font-size: 25px;

    padding: 22px 0;
  }
  > p {
    font-size: 15px;

    padding: 10px 0;
  }
`;

export const WrapperStar = styled.div`
  margin-left: 40px;

  > h1 {
    font-size: 48px;
    color: var(--white);
    text-transform: uppercase;
  }
  > div {
    background-color: var(--green);
    padding: 10px 22px;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Star = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;

export const WrapperReasons = styled.div`
  color: var(--white);
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    padding-bottom: 15px;
  }
  > p {
    border-top: 2px dashed var(--white);
    padding: 15px 0;
  }
`;

export const WrapperDepositions = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding-bottom: 100px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 10px;
    gap: 10px;
    padding-bottom: 10px;
  }
`;
