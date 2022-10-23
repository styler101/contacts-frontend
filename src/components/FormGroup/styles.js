import styled, { keyframes } from 'styled-components'


const Rotate = keyframes`
  from{
    transform: rotate(0);
  }

  to{
    transform: rotate(360deg);
  }

`
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

  div{
    width:100%;
    display: flex;
    flex-direction:row;
    align-items:center;
    position:relative;
    background: #ddd;

    .loader{
      width:1.563rem;
      height:1.563rem;
      background:transparent;
      border: 4px solid transparent;
      border-left-color: ${({theme}) => theme.colors.primary.lighter};
      border-radius: 50%;
      animation:${Rotate} 1s linear infinite;
      position:absolute;
      right:8px;
    }
  }
`


