import styled from 'styled-components';

export const Container = styled.nav`
  position:fixed;
  top:0;
  width:100%;
  display:flex;
  justify-content:flex-end;
  

  div{
      width:100px;
      display:flex;
      justify-content:space-around;  
      align-items:center;
      img{
        width:32px;
        height:32px;
        border-radius:50%;
      }
      .bra{
        height:24px;
      }
  }
`;
