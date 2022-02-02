import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --medium-white: #BDBDBD;
    --black: #212121;
    --green: #48A69B;
    --medium-green: #59938A;
    --dark-green: #1C3353;
    --gray: #909090;
    --light-gray: #D3E4DD;
    --red: #D00000;
    --dark-red: #FF4040;
    --purple: #562B8B;
    --blue: #305589;
    --light-blue: #6E93CA;
  }
  
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Spinnaker', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
    line-height: 1;
  }

  blockquote {
    &:before, &:after {
      content: '';
      content: none; 
    } 
  }

  q {
    &:before, &:after {
      content: '';
      content: none; 
    } 
  }
  
  ol, ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  blockquote, q {
    quotes: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0; 
  }

  button {
    border: none;
    cursor: pointer;
  }

  input,
textarea,html input[type="button"],
input[type="reset"],
input[type="submit"],button[disabled],
input[type="radio"], input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button, input[type="search"], input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  border:none;
    background-image:none;
    background-color:transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
}


`;
