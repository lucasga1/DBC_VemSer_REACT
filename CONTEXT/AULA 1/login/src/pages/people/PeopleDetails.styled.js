import styled from "styled-components";

export const BgColor = styled.body`
  background-color:  #E5E5E5 ;
`;

export const DivDetail = styled.div`
position: relative;
max-width: 1000px;
margin-left: 280px;
display: grid;
`;

export const Pessoas = styled.div`
background-color: #fff;
display: grid;
position: relative;
max-width: 1000px;
margin-left: 280px;
border-radius: 10px;
`;

export const DivButtonRegister = styled.div`
display: flex;
justify-content: flex-end;
margin-right: 30px;
`;

export const BarraUsuario = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 30px 0;
color:#252733;
`;

export const AllTickets = styled.div`
display: flex;
justify-content: space-between;
padding: 20px 25px;
border:  1px solid #DFE0EB;
border-bottom: none;
color:#252733;

& button {
background-color: #fff;
color:#4B506D;
font-weight: 600;
font-size: 14px;
font-family: 'Mulish';
margin: 0 5px;
border: none;
cursor: pointer;
}
`;

export const Descricao = styled.div`
display: grid;
padding: 10px 25px;
grid-template-columns: 2fr 2fr 2fr 2fr 1fr 1fr;
border:  1px solid #DFE0EB;
border-top: none;
font-weight: 700;
font-size: 14px;
color: #9FA2B4;
`;


export const DivFlex = styled.div`
display: flex;
`;


export const PerfilUsuario = styled.div`
display: flex;
margin-left: 20px;
& h1 {
    font-weight: 600;
    font-size: 14px;
}
`;

export const ButtonsBarraUsuario = styled.div`
border-right: 1px solid #bebfc7;
display: flex;
align-items: center;
& button {
    background-color: transparent;
    border: none;
    margin: 0 10px;
}
`;