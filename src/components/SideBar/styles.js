import styled from 'styled-components'


export const Container = styled.div`
 position:absolute;
 top:0;
 left: ${({ activeSideBar }) => activeSideBar ? '0' : '-400px'};
 width:400px;
 height:100%;
 background-color:#ccc;
 transition: left 0.5s ease-out;




`

export const IconWrapper = styled.div`
 width:100%;
 display:flex;
 align-items:center;
 justify-content: flex-end;
 padding:2rem;
  svg{
    cursor:pointer;
  }

`

export const DropList = styled.div`
 margin-top:2rem;
 ul{
   list-style: none;

   li{
     display:flex;
     align-items:center;
     padding: 0.8rem 2rem;


     &:hover{
       background-color:#fff;
       color: #c8c8c8;
       cursor:pointer;
     }

     span{
       display:block;

       font-weight:bold;
       padding-left: 1rem;
     }
   }
 }
`
