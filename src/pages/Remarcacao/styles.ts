import styled from 'styled-components';



export const Container = styled.div`
    display:flex;
    flex-wrap:wrap;
    background-image: url(${props=>props.theme.background.image});
    background-size: 1600px;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-color:${props=>props.theme.background.primary};
    padding:20px;
    align-items:center;
    justify-content:center;
    
`;

