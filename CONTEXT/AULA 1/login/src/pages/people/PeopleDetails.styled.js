import styled from "styled-components";

export const BgColor = styled.body`
  background-color:  #d3d3d3; 
  height: 100%;
`;

export const DivAbsolute = styled.div`
width: 1200px;
margin: 0 auto;
`;

export const DivDetail = styled.div`
display: grid;
`;

export const Pessoas = styled.div`
display: grid;
max-width: 1200px;
background-color: #fff;
border-radius: 10px;
margin: 0 auto;
`;

export const DivButtonRegister = styled.div`
display: flex;
justify-content: flex-end;
margin: 0 30px 50px 0;
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
padding: 20px 15px;
font-size: 16px;
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
grid-template-columns: repeat(4, 1fr);
text-align: s;
padding: 10px 15px;
border:  1px solid #DFE0EB;
border-top: none;
font-weight: 700;
font-size: 16px;
font-family: 'Mulish';
color: #000000;

`;

export const DivFlex = styled.div`
display: flex;
align-items: center;
`;


export const PerfilUsuario = styled.div`
display: flex;
align-items: center;
margin-left: 20px;

& h1 {
    padding-right: 20px;
    font-weight: 600;
    font-size: 14px;
}

& img {
  margin-left: 10px;
  width: 60px;
  padding: 3px;
  border: 1.5px solid #fff;
  border-radius: 100%;
}
`;

export const ButtonsBarraUsuario = styled.div`
border-right: 1px solid #bebfc7;
display: flex;
align-items: center;
height: 50px;

& button {
    background-color: transparent;
    border: none;
    margin: 0 20px;
}
`;