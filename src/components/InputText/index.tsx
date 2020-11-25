import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { Container, LabelContent, InputContent } from './styles';

interface InputProps {
  backGroundColor?: string;
  color?: string;
  labelColor?: string;
  placeholderColor?: string;
  placeHolder: string;
}
const InputText: React.FC<InputProps> = ({ backGroundColor, color, labelColor, placeholderColor, placeHolder }: InputProps) => {
  const { colors } = useContext(ThemeContext);
  const [inputFocused, setInputFocused] = useState(false);
  const [text, setText] = useState('');
  

  const handleChangeText = (e:HTMLInputElement) =>{
    setText(e.value);
  }

  return (
    <Container>
      <LabelContent inputValue={text} inputFocused={inputFocused} htmlFor={placeHolder}>{placeHolder}</LabelContent>
      <InputContent
        id={placeHolder}
        backGroundColor={backGroundColor || colors.input}
        color={color || colors.primary}
        
        placeholderColor={placeholderColor || colors.primary}
        onFocus={()=>setInputFocused(true)}
        onBlur={()=>{setInputFocused(false)}}
        onChange={(e)=>handleChangeText(e.target)}

        value={text}
      />
    </Container>
  )
}
export default InputText;