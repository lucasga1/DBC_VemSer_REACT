import styled from "styled-components";

export const HeaderDiv = styled.div`
position: absolute;
display: flex;
flex-direction: column;
background-color: #363740;
width: 255px;
height: 100vh;
`;

export const DivLogo = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-flow: row nowrap;
height: 100px;

& a {
    text-decoration: none;
}

& h1{
font-size: 19px;
color: #A4A6B3;
opacity: 0.7;
margin-left: 12px;
}
`;

export const Logo = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 45px;
height: 45px;
background-color: #fff;
border: 1px solid #DFE0EB;
border-radius: 100%;
`;