export default styled.select`
  width:100%;
  background:${({theme}) => theme.colors.white};
  height: 2.813rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.04);
  outline:0;
  border-radius:4px;
  padding: 0.5rem 1rem;
  font-size:1rem;
  color: ${({theme}) => theme.colors.input};
  border: 2px solid transparent;
  transition: border-color 0.2s ease-in;
  appearance: none ;

  &:focus{
    border-color:${({theme}) => theme.colors.primary.main}

  }

`


import styled from 'styled-components'

