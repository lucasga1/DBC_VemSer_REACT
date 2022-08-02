import styled from "styled-components";

export const Pessoa = styled.div`

& div {
display: grid;
grid-template-columns: 3fr 1fr;
justify-content: space-between;
list-style: none;
font-size: 14px;
font-weight: 600;
padding: 15px;
border: 1px solid #E5E5E5;
border-top: none;

& div:last-child{
    display: flex;
    justify-content: space-between;
    border: none;
}
& span {
    display: flex;
    justify-content: space-between;
    font-size: 16px;    
}
}

& div:hover{
    background-color: #E5E5E5;
    padding: 15px;
    cursor: pointer;
}

& button {
    display: flex;
    justify-content: center;
    flex-flow: row nowrap;
    font-family: 'Mulish';
    margin: 0 5px;
    padding: 5px 10px;
    background-color: #3751FF;
    border: none;
    border-radius: 8px;
    color: #fff;
}
& button:last-child {
    width: 160px;
}

& button:hover {
    background-color: #4169E1;
}

& img {
    width: 38px;
    padding-right: 10px;
}

& li {
    width: 200px;
    display: flex;
    align-items: center;
}
`;