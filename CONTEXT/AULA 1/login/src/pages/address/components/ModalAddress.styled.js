import styled from "styled-components";

export const DivDescricao = styled.div`
width: 945px;
height: 24px;
display: grid;
grid-template-columns: 120px 250px 90px 120px 93px 90px 90px 90px;
border: 1px solid #DFE0EB;
border-radius: 8px;
& p {
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    border-left:  1px solid #DFE0EB;
}

& p:first-child{
    border: none;
}

`;

export const Endereco = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid #DFE0EB;
border-radius: 8px;
padding-bottom: 8px;
margin-top: 8px;


& div:first-child{
    width: 945px;
    display: grid;
    grid-template-columns: 120px 250px 90px 120px 93px 90px 90px 90px;
    border-radius: 8px;
}

& div:last-child{
    width: 900px;
    display: flex;
    justify-content: center;
    & button {
        margin: 0 5px 0 5px;
    }
}

& li {    
    padding: 8px;
    text-align: center;
    font-size: 14px;
    border-left: 1px solid #DFE0EB;
    border-bottom: 1px solid #DFE0EB;
}
& li:first-child {
    border-left: 0;
}
`;

export const DivContent = styled.div`
display: grid;
justify-items: center;

& h1 {
    font-size: 18px;
}   
& button {
    width: 100px;
    height: 25px;
}
`;