import styled from "styled-components";

export const Pessoa = styled.div`
& div {
display: grid;
align-items: center;
list-style: none;
font-size: 14px;
font-weight: 600;
padding: 25px;
grid-template-columns: 670px 90px 90px 140px;
border: 1px solid #DFE0EB;
border-top: none;
color: #252733;
& span {
    display: grid;
    grid-template-columns: 210px 100px 110px 1fr;
}
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

& img {
    width: 38px;
    padding-right: 10px;
}

& li {
    display: flex;
    align-items: center;
}
`;

export const Div = styled.div`
position: absolute;
left: 285px;
`
