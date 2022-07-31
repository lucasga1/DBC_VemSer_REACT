import styled from "styled-components";

export const ContainerForm = styled.div`
position: absolute;
left: 285px;
display: grid;
align-items: center;
width: 81.5%;
height: 100%;

& > div {
    text-align: center;
    & h1{
        font-size: 24px;
    }
}
`;

export const DivForm = styled.div`
border:  2px solid #DFE0EB;
border-radius: 8px;
margin: 0 auto;
padding: 20px;

& form {
display: flex;
flex-direction: column;
width: 800px;
}

& label {
    text-align: left;
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

`;