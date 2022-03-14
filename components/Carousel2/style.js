import styled from 'styled-components';

export const Container = styled.div`
  border: 8px solid var(--white);
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const ImgCarousel = styled.div`
  > img {
    width: 100%;
    min-height: 100%;
  }
`;
