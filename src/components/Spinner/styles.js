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
  width:1.563rem;
  height:1.563rem;
  background:transparent;
  border: 4px solid transparent;
  border-left-color: ${({theme}) => theme.colors.primary.dark};
  border-radius: 50%;
  animation:${Rotate} 0.8s linear infinite;
  position:absolute;
  right:8px;
 `

