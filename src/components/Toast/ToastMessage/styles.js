import styled, { css } from 'styled-components'

const containerVariants = {
  default: css`
    background: ${({ theme }) => theme.colors.primary.main};
    margin-left: 0;
  `,
  success: css`
    background: ${({ theme }) => theme.colors.success.main};
  `,

  danger: css`
    background: ${({ theme }) => theme.colors.danger.dark};
  `,
}

export const Container = styled.div`
  padding: 1rem 2rem;
  cursor: pointer;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0 20px 20px -16px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;

  strong {
    margin-left: 8px;
  }
  & + div {
    margin-top: 12px;
  }
  ${({ type }) => containerVariants[type] || containerVariants['default']}
`
