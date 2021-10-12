import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

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
  list-style: none;
}

​a {
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
