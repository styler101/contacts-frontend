import styled, { css } from 'styled-components'

export const Container = styled.button`
  padding: 0 1rem;
  height: 2.813rem;
  font-weight: bold;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primary.main};
  color: ${(props) => props.theme.colors.white};
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  transition: background 0.2s ease-in;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: ${(props) => props.theme.colors.primary.light};
  }

  &:active {
    background: ${(props) => props.theme.colors.primary.dark};
  }

  &:disabled {
    background: #ccc !important;
    box-shadow: none !important;
    cursor: default !important;
  }

  ${({ theme, danger }) =>
    danger &&
    css`
      color: ${theme.colors.white};
      background-color: ${theme.colors.danger.main};

      &:hover {
        background: ${theme.colors.danger.light};
      }

      &:active {
        background: ${theme.colors.danger.dark};
      }

      ${(props) =>
        props.danger &&
        css`
          h1 {
            color: ${(props) => props.theme.colors.danger.main};
          }
        `}
    `}
`
