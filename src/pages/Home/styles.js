import styled, { css } from 'styled-components'

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
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary.main};
    border: 2px solid ${(props) => props.theme.colors.primary.main};
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    &:hover {
      background-color: ${(props) => props.theme.colors.primary.dark};
      color: #fff;
      transition: all 0.2s ease-out;
    }
  }
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
    box-shadow: 1px 1px 2px ${(props) => props.theme.colors.border};
    padding: 0 2rem;
    color: ${(props) => props.theme.colors.gray['200']};
    &::placeholder {
      color: ${(props) => props.theme.colors.gray['200']};
    }
  }
`

export const ListContainer = styled.header`
  margin-top: 1.5rem;
  margin-bottom: 1rem;

  header {
    width: 100%;
    .sort-button {
      background: transparent;
      border: none;
      display: flex;
      flex-direction: row;
      align-items: center;

      &:disabled {
        cursor: default;
        opacity: 0.3;
      }
      span {
        font-weight: bold;
        margin-right: 1rem;
        font-size: ${(props) => props.theme.text};
        color: ${(props) => props.theme.colors.primary.main};
      }

      img {
        transition: transform 0.5s ease-in;
      }
    }
  }

  ${(props) => {
    if (props.direction === 'ASC') {
      return css`
        img {

          transform: rotate(90deg);
        }
      `
    }
    return css`
      img {
        transform: rotate(-90deg);
      }
    `
  }}
`
export const Card = styled.div`
  width: 100%;
  margin: 1rem 0;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  padding: 1rem;
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  align-items: center;
  justify-content: space-between;

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background: ${(props) => props.theme.colors.primary.lighter};
        color: ${(props) => props.theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        padding: 0.25rem;
        border-radius: 0.25rem;
        margin-left: 0.5rem;
      }
    }
    span {
      display: block;
      font-size: 0.875rem;
      color: ${(props) => props.theme.colors.gray['200']};
    }
  }

  .actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    button {
      background: transparent;
      border: none;
      margin-left: 0.825rem;
    }
  }
`
