import styled from 'styled-components'


export const Container = styled.div`
 width:100%;
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content: center;
 margin-top: 4rem;

svg{

}
p{
  margin-top: 1rem;
  color: ${({theme}) => theme.colors.input};
}
`