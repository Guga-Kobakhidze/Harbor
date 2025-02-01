import { createGlobalStyle, keyframes } from "styled-components";
import backgroundImg from "../assets/background.svg";
import { pxToRem } from "../helper";

export const frameByFrame = keyframes`
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
       --dark-color: #000000;
       --overlay-color: #00000094;
       --secondary-color: #B4B4B46B;
       --main-bg-color: #1b245d;
       --dark-bg-color: #161E4C;
       --button-bg-color: #282083;
       --sideBar-bg-color: #1e1a49;
       --button-bg-hover-color: #2a2371;
       --border-color: #4C496F;
       --input-color: #E6E6E6;
       --input-error-color:rgb(183, 40, 40);
       
       /* font sizes */
       --x-small-size: ${pxToRem(14)};      
       --small-size: ${pxToRem(18)};        
       --medium-size: ${pxToRem(20)};      
       --large-size: ${pxToRem(24)};
       --xs-large-size: ${pxToRem(36)};       
       --x-large-size: ${pxToRem(48)};     
       --xx-large-size: ${pxToRem(74)};  
       --xx-medium-size: ${pxToRem(120)};
       --xxx-large-size: ${pxToRem(128)};  
       --huge-size: ${pxToRem(200)};

       /* Font Weights */
       --regular-w: 400;
       --medium-w: 500;
       --semibold-w: 600;
       --bold-w: 700;
       --extra-bold-w: 800;
       --black-w: 900;

       /* z-indexes */
       --minimum-z: 0;
       --maximum-z: 999;

       /* line Heights */
       --xxx-large-line: ${pxToRem(140)};  

       /* paddings / margins */
       --global-padding: ${pxToRem(117)};
       --global-margin: 0 auto;
    }

    @media (max-width: 1200px) {
      :root {
        --small-size: ${pxToRem(16)};
        --medium-size: ${pxToRem(18)};
        --large-size: ${pxToRem(22)};
        --x-large-size: ${pxToRem(40)};
        --xx-large-size: ${pxToRem(60)};
        --xx-medium-size: ${pxToRem(80)};
        --xxx-large-size: ${pxToRem(88)};
        --xxx-large-line: ${pxToRem(90)};
        --global-padding: ${pxToRem(40)};
      }
    }

      @media (max-width: 870px) {
      :root {
        --large-size: ${pxToRem(18)};
        --x-large-size: ${pxToRem(30)};
        --xx-medium-size: ${pxToRem(60)};
        --xxx-large-size: ${pxToRem(68)};
        --xxx-large-line: ${pxToRem(80)};
      }
    }

      @media (max-width: 600px) {
      :root {
        --xx-medium-size: ${pxToRem(40)};
        --xxx-large-size: ${pxToRem(48)};
        --xxx-large-line: ${pxToRem(60)};
        --global-padding: ${pxToRem(16)}
      }
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

export const FlexBoxBetween = `
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FlexBoxCenter = `
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
