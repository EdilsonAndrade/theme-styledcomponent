import styled from 'styled-components';

export const Container = styled.div`
width:40%;
`;
export const Content = styled.div`
    display:flex;
    width:350px;
    flex-direction:column;
    justify-content:center;
    flex: 1 1;
    margin: 40px 0 20px;
    background-color:#2374BB;
    border-radius:8px;
    padding:20px;
`;
interface ButtonProps{
    disabled:boolean;
}
export const ButtonContent = styled.button<ButtonProps>`
width:100%;
background-color:${props=>props.disabled ? props.theme.buttons.disabled : props.theme.colors.secondary};
margin-left: 5px;
border:none;
border-radius:8px;
padding:10px;

`;

