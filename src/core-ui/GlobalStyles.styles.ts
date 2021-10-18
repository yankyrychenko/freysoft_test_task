import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Helvetica Now Display';
  src: url("../assets/fonts/Helvetica Now Display.otf");
  font-weight:400;
}

@font-face {
  font-family: 'Helvetica Now Display';
  src: url("../assets/fonts/Helvetica Now Display Bold.otf");
  font-weight:800;
}

@font-face {
  font-family: 'Helvetica Now Display';
  src: url("../assets/fonts/Helvetica Now Display Black.otf");
  font-weight:900;
}

​*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Helvetica Now Display, serif;
  font-size: 16px;
}

img {
  display: block;
  height: auto;
  max-width: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
li {
  margin:0;
  padding:0;
  list-style: none;
}

​a {
  margin:0;
  padding:0;
  text-decoration: none;
}

button {
border:none;
background-color: transparent;
}

button:hover {
  cursor: pointer;
}

input:focus,
input:active,
button:active,
button:focus {
  outline: none;
}
`;
