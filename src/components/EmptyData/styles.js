import styled from 'styled-components'

export const Container = styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content: center;
 margin-top:2rem;

  button{
    margin-bottom:1rem;
    width:8.875rem;
    height: 2.625rem;
    background:transparent;
    border:2px solid ${({theme}) => theme.colors.primary.main};
    color: ${({theme}) => theme.colors.primary.main};
    font-weight:600;
    border-radius:4px;
    transition: all 0.2s ease-out;
    &:hover{
      background:${({theme}) => theme.colors.primary.dark};
      color:${({theme}) => theme.colors.white};
    }
  }
  hr{
    width:100%;
  }

  div{
    margin-top:1rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
  }
`


export const Wrapper = styled.div`
 width:402px;

 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content: center;
 text-align:center;
 p{
   color:${({theme}) => theme.colors.border};

   strong{
     color:${({theme}) => theme.colors.primary.dark};
   }
 }
`

