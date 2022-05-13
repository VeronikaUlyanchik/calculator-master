import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${props => props.theme.font};
  }

  html, body {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  body {
    & > #root {
      width: 100%;
      height: 100%;
    }
  }

  body {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color:  ${props => props.theme.background};
  }
`
