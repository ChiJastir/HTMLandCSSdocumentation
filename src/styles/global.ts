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

  button {
    color: ${props => props.theme.colors.text};
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: ${props => props.theme.colors.btn};
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    border-color: ${props => props.theme.colors.primary}
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  //@media (prefers-color-scheme: light) {
  //  :root {
  //    color: #213547;
  //    background-color: #ffffff;
  //  }
  //  a:hover {
  //    color: #747bff;
  //  }
  //  button {
  //    background-color: #f9f9f9;
  //  }
  // }
`