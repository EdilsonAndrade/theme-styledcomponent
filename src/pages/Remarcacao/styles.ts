import styled, { css } from 'styled-components';



export const Container = styled.div`
    display:flex;
    flex-wrap:wrap;
    ${props=>props.theme.background.image.length >0 && css` background-image: url(${props=>props.theme.background.image})`};
    background-size: 1600px;
    background-repeat: no-repeat;
    background-position: ${props=>props.theme.background.position};
    background-color:${props=>props.theme.background.primary};
    padding:20px;
    align-items:center;
    justify-content:center;
    
`;

