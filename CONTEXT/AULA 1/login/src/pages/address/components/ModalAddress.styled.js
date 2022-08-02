import styled from "styled-components";

export const DivDescricao = styled.div`
display: grid;
grid-template-columns: 120px 250px 90px 120px 93px 90px 90px 90px;

& p {
    text-align: center;
    padding: 8px;
    border: 1px solid #DFE0EB;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
}
`;

export const Endereco = styled.div`
display: grid;
grid-template-columns: 120px 250px 90px 120px 93px 90px 90px 90px;

& li {    
    text-align: center;
    padding: 8px;
    border: 1px solid #DFE0EB;
    border-radius: 8px;
    font-size: 14px;
}
`;

export const DivContent = styled.div`
display: grid;
justify-items: center;
& div:last-child{
    width: 200px;
    display: flex;
    justify-content: center;
    padding: 10px 0;

    & button {
        margin: 0 10px 20px 10px;
            }
}
`;