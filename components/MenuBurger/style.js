import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const styles = {
  bmBurgerButton: {
    position: 'relative',
    width: '36px',
    height: '30px',
    marginTop: '10px',
  },
  bmBurgerBars: {
    background: 'white',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    top: '0',
    left: '0',
  },
  bmMenu: {
    background: '#373a47',
    padding: '20px 20px 0',
    fontSize: '25px',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    display: 'flex',
    flexDirection: 'column',
    color: '#b8b7ad',
    padding: '10px',
  },
  bmItem: {
    paddingBottom: '20px',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.2)',
    top: '0',
    left: '0',
  },
};
