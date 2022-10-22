import React from 'react'

import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;

  h1 {
    color: ${({ theme }) => theme.colors.danger.light};
    font-size: ${({ theme }) => theme.typography.heading.h2};
  }
`

export default function PageNotFound() {
  return (
    <Container>
      <header>
        <h1> Página não encontrada! :(</h1>
      </header>
    </Container>
  )
}
