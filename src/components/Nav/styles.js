import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;

  svg {
    cursor: pointer;
  }
`

export const ThemeWrapper = styled.div`
  width: 200px;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    input[type='checkbox'] {
      width: 80px;
      height: 30px;
      appearance: none;
      background: #f1f1f1;
      border-radius: 15px;
      box-shadow: inset 0px 0px 1px 1px rgba(180, 180, 180, 0.2);
      cursor: pointer;
      transition: background 0.3s ease-out;
      position: relative;
      &:checked {
        background: ${(props) => props.theme.colors.primary.light};
        right: 0;
      }

      &:before {
        content: '';
        width: 30px;
        height: 30px;
        position: absolute;
        background-color: #f5f5f5;
        box-shadow: inset 0 0 1px 1px #ccc;
        border-radius: 50%;
        left: 1px;
        transform: scale(1.1);
        transition: 0.5s;
      }

      &:checked::before {
        left: 50px;
      }
    }
  }
`
