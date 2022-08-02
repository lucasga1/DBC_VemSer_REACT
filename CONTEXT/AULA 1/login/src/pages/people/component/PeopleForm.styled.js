import styled from "styled-components"; 

export const ContainerForm = styled.div`
display: grid;
align-items: center;

& > div {
    text-align: center;
    & h1{
        margin-top: 30px;
        font-size: 24px;
    }
}
`;

export const DivForm = styled.div`
display: flex;
flex-direction: column;
width: 800px;
padding: 25px;
margin: 0 auto;
border:  2px solid #DFE0EB;
border-radius: 8px;

& label {
    color: #252733;
    font-size: 16px;
    font-weight: 700;
    padding: 10px 25px;
}


& input {
    margin: 0 25px;
    padding-left: 15px;
    height: 35px;
    border:  1.5px solid #DFE0EB;
    border-radius: 8px;
}

& input::placeholder {
    font-family: 'Mulish';    
}

& input:focus {
    outline: none;
    background-color: #E5E5E5;
}

& div {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}
`;