import styled from "styled-components"; 

export const Body = styled.body`
background: #346D84;
height: calc(100vh - 70px);
`;

export const Div = styled.div`
display: grid;
justify-items: center;
width: 1100px;
margin: 0 auto;
& button{
    width: 500px;
    height: 100px;
    font-size: 30px;
}
`;