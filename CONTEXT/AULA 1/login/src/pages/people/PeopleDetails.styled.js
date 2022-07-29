import styled from "styled-components";

export const Container = styled.div`
position: relative;
max-width: 1200px;
margin-left: 21%;
display: grid;
grid-template-columns: 1fr 2fr;
`;

export const Pessoas = styled.div`
display: grid;
margin-top: 30px;
width: 940px;
`;

export const Descricao = styled.div`
display: grid;
aling-items: center;
padding: 10px 15px;
grid-template-columns: 2fr 2fr 2fr 2fr 1fr 1fr;
border-top: none;
border-bottom: none;
border: 1px solid #f3f3f3;
font-size: 14px;
`;

export const MenuLateral = styled.div`
width: 260px;
heigth: 100%;
margin-top: 30px;
background-color: #f3f3f3;
`;

export const BarraUsuario = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-bottom: 30px;
`;

export const DivFlex = styled.div`
display: flex;
`;

export const BarraDescricao = styled.div`
display: flex;
justify-content: space-between;
border: 1px solid #f3f3f3;
border-bottom: none;
padding: 20px 15px;
`;

export const PerfilUsuario = styled.div`
display: flex;
margin-left: 20px;
`;

export const ButtonsBarraUsuario = styled.div`
&{
    margin-left: 10px;
}
    `;