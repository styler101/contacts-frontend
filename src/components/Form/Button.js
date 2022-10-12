import styled from 'styled-components'


export default styled.button`
 width:100%;
  height: 2.813rem;
  font-weight:bold;
  border-radius: 4px;
  background: ${({theme}) => theme.colors.primary.main};
  color:${(props) => props.theme.colors.white};
  border:none;
  cursor:pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.4);
  transition: background 0.2s ease-in;

  &:hover{
    background:${(props) => props.theme.colors.primary.light};
  }

  &:active{
    background:${(props) => props.theme.colors.primary.dark};
  }

  &:disabled{
    background:#ccc;
    box-shadow: none;
    cursor:default;
  }
`

