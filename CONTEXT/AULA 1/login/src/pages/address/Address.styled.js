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
    margin-top: 20px;
    & h1{
        font-size: 24px;
    }
}
`;

export const DivForm = styled.div`
display: flex;
flex-direction: column;
width: 800px;
margin: 20px auto 20px auto;
padding: 20px;
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
    justify-content: space-evenly;
    margin-top: 10px;
}
`;