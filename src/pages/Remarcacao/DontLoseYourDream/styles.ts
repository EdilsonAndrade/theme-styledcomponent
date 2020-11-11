import styled from "styled-components";

interface Props {
  isMobile?: boolean;
}
export const Container = styled.div`
width:60%;
`;
export const Content = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width:500px;
  margin: 0 auto;

  > h3 {
    margin: 2px 0 17px 0;
  }
`;

export const MainTitleContent = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-size: 36px;
`;
export const ButtonContent = styled.button`
  color: ${(props) => props.theme.buttons.linkButton.primary};
  background: transparent;
  border: 1px solid ${(props) => props.theme.buttons.linkButton.primary};
  width: 226px;
  padding: 5px 11px;
  border-radius: 8px;
  margin: 0 0 15px 0;
  :hover {
    background: ${(props) => props.theme.buttons.linkButton.hover};
  }
`;

export const CardsCiaContent = styled.div`
  display: flex;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.primary};
  color: #000;
  padding: 15px;
  
  height:32px;
  border-radius: 8px;
  img {
    width: 24px;
  }
  & + & {
    margin-left: 12px;
  }
  span {
    margin-left: 2px;
    font-weight:700px;    
  }
  caption{
      margin-top:4px
  }
`;
