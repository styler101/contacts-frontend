import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

 *{
  padding:0;
  margin: 0;
  outline: 0;
  box-sizing:border-box;
  font-family: 'Sora', sans-serif;
}


body{
  background-color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.typography.text};
  }


  button{
    cursor:pointer;
  }

  a{
    text-decoration:none;


  }




`
