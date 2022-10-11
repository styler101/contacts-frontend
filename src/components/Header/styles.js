import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const InputSearchContainer = styled.div`
  margin-top: 48px;
  width: 100%;
  input {
    width: 100%;
    height: 50px;
    border-radius: 25px;
    background: #fff;
    border: none;
    box-shadow: 1px 1px 2px #c8c8c8;

    &::placeholder {
      padding: 0 16px;
      color: #bcbcbc;
    }
  }
`
