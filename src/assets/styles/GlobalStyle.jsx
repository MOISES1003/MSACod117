import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: sans-serif;
        font-family: "Poppins", sans-serif;
    }
    h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
    }
    &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(193, 193, 200);
    border-radius: 15px;
  }
a{
    color: inherit;
    text-decoration:none;
}
`;
