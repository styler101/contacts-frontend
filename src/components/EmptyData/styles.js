import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  header {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      width: 2.5rem;
      height: 2.5rem;
    }
    div {
      margin-left: 1.5rem;
      h1 {
        font-size: 1.375rem;
        color: ${({ theme }) => theme.colors.danger.main};
        width: 100%;
        max-width: 23.375rem;
      }

      button {
        margin-top: 0.5rem;
        width: 11.313rem;
        height: 2.625rem;
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        border: 0;
        border-radius: 4px;
        transition: background 0.5s ease-out;
        &:hover {
          background-color: ${({ theme }) => theme.colors.primary.dark};
        }
      }
    }
  }
`
