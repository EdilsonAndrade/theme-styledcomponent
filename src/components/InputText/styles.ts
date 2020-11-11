import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

interface LabelProps {
  inputFocused: boolean;
  inputValue:string;
}

export const LabelContent = styled.label<LabelProps>`
  position: absolute;
  font-size: 15px;
  top: 15px;
  left: 15px;
  z-index: 1;
  color: ${(props) => props.theme.colors.primary};
  font-weight:400px;
  transition: top 200ms;
  ${(props) => (!props.inputFocused && props.inputValue.length >0) && css`
    color: ${(props) => props.theme.colors.primary};
    top: 5px;
    font-size: 12px;
    font-weight: bold;
  `}
  ${(props) => ( !props.inputFocused && props.inputValue.length <=0) && css`
    color: ${(props) => props.theme.colors.primary};
  `}
  ${(props) => props.inputFocused && css`
    color: ${(props) => props.theme.colors.secondary};
    top: 5px;
    font-size: 12px;
    font-weight: bold;
  `}
  
  
`;

interface Props {
  backGroundColor: string;
  color: string;
  placeholderColor: string;
}

export const InputContent = styled.input<Props>`
  position: relative;
  width:100%;
  border-radius: 8px;
  color: ${(props) => props.color};
  ::placeholder {
    color: ${(props) => props.placeholderColor};
  }
  background-color: ${(props) => props.backGroundColor};
  padding: 10px;
  margin: 5px;
  border: none;
  :hover {
    background-color: ${(props) => props.theme.colors.hover.secondary};
  }
  :focus {
    background-color: ${(props) => props.placeholderColor};
    color:  ${(props)=>props.theme.colors.secondary}
  }
`;
