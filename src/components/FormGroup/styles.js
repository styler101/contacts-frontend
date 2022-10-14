import styled from 'styled-components'

export const Container = styled.div`
 width:100%;

  & + div{
    margin-top:1rem;
  }

  small{
    color: ${(props) => props.theme.colors.danger.main};
    margin-top: 0.5rem;
    font-size:0.75rem;
    display:block;
  }
`


