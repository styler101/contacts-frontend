import styled  from 'styled-components'
import { Container as StyledSpinner } from "../Spinner/styles";

export const Overlay = styled.div`
 width:100%;
 height:100%;
 position:absolute;
 top:0;
 left:0;
 background-color: rgba(255,255,255,0.9);
 display:flex;
 flex-direction: column;
 align-items:center;
 justify-content: center;
`


export const StyleSpinner = styled.div`
  position:relative;
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content: center;


`


export const CustomSpinner = styled(StyledSpinner)`
 position:relative;
`
