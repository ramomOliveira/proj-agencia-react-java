import styled from 'styled-components';

export const Container = styled.div`
  border: 8px solid var(--white);
`;

export const Carousel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const Item = styled.div`
  width: 100%;
  flex: none;
`;
export const ImageCarousel = styled.div`
  background-image: ${(props) => (props.src ? 'true' : 'false')};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
} */
`;

export const WrapperNext = styled.div`
  z-index: 9;
  > button {
    background-color: transparent;
  }
`;

export const WrapperBack = styled.div`
  z-index: 9;
  > button {
    background-color: transparent;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -142px;
`;
