import styled from "styled-components";

export const Pessoa = styled.div`
& div {
display: grid;
list-style: none;
font-size: 14px;
font-weight: 600;
padding: 25px;
grid-template-columns: 2fr 2fr 2fr 2fr 1fr 1fr;
border: 1px solid #DFE0EB;
border-top: none;
color: #252733;
}

& div:hover{
    background-color: #E5E5E5;
    padding: 25px;
    cursor: pointer;
}

& button {
    margin: 0 5px;
    padding: 5px 0;
    background-color: #3751FF;
    border: none;
    border-radius: 8px;
    color: #fff;
}

& button:hover {
    background-color: #4169E1;
}
`;

