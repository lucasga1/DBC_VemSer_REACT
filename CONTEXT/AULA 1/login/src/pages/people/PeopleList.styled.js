import styled from "styled-components";

export const Pessoa = styled.div`

& div:hover{
    background-color: #E5E5E5; 
    & button {
        display: block;
    }   
}

& div {
display: flex;
flex-direction: column;
list-style: none;
font-size: 14px;
font-weight: 600;
border-top: none;
border: 1px solid #E5E5E5;


& div:last-child{
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: none;
}

& div {
    display: grid;
    align-items: center;
    text-align: center;
    grid-template-columns: repeat(4, 1fr);
    font-size: 16px;  
    padding: 5px 15px;  
    border: none;
}


& button {
    display: none;
    width: 170px;
    font-family: 'Mulish';
    margin: 0px 5px;
    padding: 3px;
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
}
`;


