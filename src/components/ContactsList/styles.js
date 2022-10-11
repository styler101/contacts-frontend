import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 2rem;
`

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  strong {
    font-weight: bold;
    color: ${(props) => props.theme.colors.gray.dark};
    font-size: 1.5rem;
  }

  a {
    font-weight: bold;
    color: ${(props) => props.theme.colors.primary.main};
    border: 2px solid ${(props) => props.theme.colors.primary.main};
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme.colors.primary.dark};
      color: #fff;
      transition: all 0.2s ease-out;
    }
  }
`
