import { createGlobalStyle, keyframes } from "styled-components";
import backgroundImg from "../assets/background.svg";
import { pxToRem } from "../helper";

const frameByFrame = keyframes`
  from {
    background-position: 0 0;
  }
  
  to {
      background-position: -800% 0;
  }`;

const GlobalStyle = createGlobalStyle`
    :root {
        /* colors */
       --primary-color: #ffffff;
       --secondary-color: #B4B4B46B;
       --main-bg-color: #1b245d;
       --dark-bg-color: #161E4C;
       --button-bg-color: #282083;
       --border-color: #4C496F;
       --input-color: #E6E6E6;
       
       /* font sizes */
       --x-small-size: ${pxToRem(14)};      
       --small-size: ${pxToRem(18)};        
       --medium-size: ${pxToRem(20)};      
       --large-size: ${pxToRem(24)};       
       --x-large-size: ${pxToRem(48)};     
       --xx-large-size: ${pxToRem(74)};    
       --xxx-large-size: ${pxToRem(128)};  
       --huge-size: ${pxToRem(200)};

       /* Font Weights */
       --regular-w: 400;
       --medium-w: 500;
       --semibold-w: 600;
       --bold-w: 700;
       --extra-bold-w: 800;
       --Black-w: 900

       /* z-indexes */
       --minimum-z: 0;
       --maximum-z: 999;
    }



  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-family: 'DM Sans';
    background: url(${backgroundImg}) repeat var(--main-bg-color);
    animation: ${frameByFrame} 1s steps(12) infinite;
    color: var(--primary-color);
    line-height: 1.5;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    font-family: 'DM Sans';
    font-weight: var(--semibold-w);
    color: inherit;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
    height: auto;
  }

  fieldset {
    border: 0;
  }

  legend {
    padding: 0;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    margin: 0;
    border: none;
    outline: none;
  }

  button {
    cursor: pointer;
    background: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: normal;
  }

  html {
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
  }
`;

export default GlobalStyle;
