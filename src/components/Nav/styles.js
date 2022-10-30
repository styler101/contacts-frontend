import styled from 'styled-components'


export const Container = styled.div`
 width: 100%;
 display:flex;
 align-items:center;
 justify-content:space-between;
 padding-top: 2rem;

  svg{
    cursor:pointer;
  }
 div{
   display:flex;
   flex-direction:row;
   align-items:center;
   justify-content: space-between;
   width:200px;

   span{

     & + span{
       margin-left: 8px;
     }
   }
 }
`
