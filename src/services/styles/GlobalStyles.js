import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  min-height: 100vh;
  margin: 0;
  font-family: 'Roboto',sans-serif;
  font-style: normal;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  color: #121417;
  
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


}

.body-no-scroll {
  overflow: hidden;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  display: block;
  color: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6,
button,
p {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  width: 100%;
}
`;
