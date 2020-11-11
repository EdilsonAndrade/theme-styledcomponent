 
import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        outline:0;
        text-decoration:none;
    }

    body{
        background:#312E38;
        color:#fff;
        -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font-size: 16px;
    font-family: ${props=>props.theme.fonts.name}
    
  }
  button{
    cursor: pointer;
  }
`;