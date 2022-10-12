import styled from 'styled-components'


export const Container = styled.div`
 margin-top:2rem;
  margin-bottom:2rem;
  a{
   display:flex;
   flex-direction:row;
   align-items:center;

   img{
   transform: rotate(-90deg);
   }

    strong{
      margin-left:1rem;
      font-size: 1rem;
      color: ${(props) => props.theme.colors.primary.main};
    }
 }

  h1{
    font-size:1.5rem;
    margin-top:0.5rem;
  }
`
