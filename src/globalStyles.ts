import { createGlobalStyle } from "styled-components";
import * as variable from './variables'
const fonts_url = 'cardAssets/fonts/';
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SpaceGrotesk';
    src: url(${fonts_url + 'SpaceGrotesk-Medium.ttf'}) format('truetype');
    font-weight: normal;
    font-style:normal;
  };
  *{
    font-family: 'SpaceGrotesk';
    font-weight: normal;
    font-style:normal;
    font-size: 12px;
    @media (max-width: ${variable.sm}) {
        font-size: 14px;
    }
    transition: all 0.3s ease;
  }
  body{
    padding: 0 !important;
    margin: 0 !important;
  }

  
`;
export default GlobalStyle;