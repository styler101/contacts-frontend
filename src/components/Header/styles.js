import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const InputSearchContainer = styled.div`
  margin-top: 3rem;
  width: 100%;
  input {
    width: 100%;
    height: 3.125rem;
    border-radius: 25px;
    background: #fff;
    border: none;
    box-shadow: 1px 1px 2px #c8c8c8;

    &::placeholder {
      padding: 0 1rem;
      color: #bcbcbc;
    }
  }
`
