import styled from "styled-components"; 

export const DivContent = styled.div`
    width: 600px;
    margin: 30px auto;

    & div>h1 {
        text-align: center;
        font-size: 24px;
        
    }

    & div>form{
        width: 600px;
        display: grid;      
        justify-items: center;
        margin: 0 auto;
        padding: 15px;
        border:  1px solid #DFE0EB;
        border-radius: 8px;
    }

    & label {
        font-size: 16px;
        font-weight: 600;
        padding-top: 10px;
    }

    & label:first-child {
        padding-top: 0;
    }

    & select {
        width: 350px;
        margin: 0 25px;
        padding-left: 15px;
        height: 35px;
        border:  1.5px solid #DFE0EB;
        border-radius: 8px;
    }

    & select::placeholder {
    font-family: 'Mulish';    
    }

    & select:focus {
    outline: none;
    background-color: #E5E5E5;
    }
    
    & input {
        width: 350px;
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

    & div>form>div {
        display: grid;
        justify-items: center;
    }
`;