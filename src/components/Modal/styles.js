import styled, { css } from 'styled-components'

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  position: fixed;
  overflow-y: hidden;

  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Container = styled.div`
  width: 100%;
  max-width: 28.125rem;
  padding: 1.5rem;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);

  h1 {
    font-size: 1.375rem;
    color: ${(props) =>
      props.danger
        ? props.theme.colors.danger.main
        : props.theme.colors.gray['900']};
  }

  p {
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  ${(props) =>
    props.danger &&
    css`
      h1 {
        color: ${(props) => props.theme.colors.danger.main};
      }
    `}
`

export const Footer = styled.footer`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  button {
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
  }
  .cancel {
    margin-right: 2rem;
    background: transparent;
    border: 0;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.gray[200]};
    transition: color 0.2s ease-out;

    &:hover {
      color: ${(props) => props.theme.colors.gray[100]};
    }
  }
`
