import {createGlobalStyle} from "styled-components";

export const GlobalStyles =  createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.bg};

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;
  }
  
  * {
    scrollbar-color: ${props => props.theme.colors.secondary} rgba(0, 0, 0, 0);
  }

  *::-webkit-scrollbar {
    width: 5px;
  }
  *::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
  }
  *::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.secondary};
  }

  a {
    font-weight: 500;
    color: ${props => props.theme.colors.primary};
    text-decoration: inherit;
  }
  a:hover {
    filter: brightness(80%);
  }

  body {
    margin: 0;
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
    margin: 0;
    overflow-wrap: break-word;
  }
  
  pre{
    overflow-x: auto;
  }
  
  .hljs{
    background-color: ${props => props.theme.colors.btn};
  }
  .hljs-name,
  .hljs-selector-tag{
    color: ${props => props.theme.colors.primary};
  }
  .hljs-attr,
  .hljs-selector-pseudo{
    color: ${props => props.theme.colors.brightPrimary};
  }
  .hljs-string,
  .hljs-attribute,
  .hljs-selector-attr{
    color: ${props => props.theme.colors.secondary};
  }
  .hljs-number{
    color: ${props => props.theme.colors.primary};
  }
  .hljs-comment{
    color: gray;
  }`