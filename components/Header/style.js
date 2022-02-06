import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 40px;

  @media (max-width: 768px) {
    padding-top: 5px;
  }
`;

export const TitleH1 = styled.h1`
  font-size: 30px;
  margin: 12px;
`;
export const TitleH2 = styled.h2`
  font-size: 13px;
`;

export const WrapperLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 768px) {
    padding-bottom: 15px;
  }
`;

export const WrapperNavBar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;
  > ul {
    display: flex;
    gap: 20px;
    align-items: center;

    > a > li {
      color: #ffffff;
      text-decoration: none;
      list-style: none;
      font-size: 20px;
    }

    > button {
      color: #ffffff;
      text-decoration: none;
      background-color: transparent;
      font-size: 20px;
      border: 3px solid var(--white);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const WrapperRange = styled.div`
  display: ${(props) => (props.dNone ? 'none' : 'block')};
  border-top: 3px solid #ffffff;
  border-bottom: 3px solid #ffffff;
  padding: 9px;
  color: #ffffff;
  font-size: 20px;
  text-transform: uppercase;
  margin: 12px 0px;
`;
