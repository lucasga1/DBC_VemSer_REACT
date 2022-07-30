import styled from "styled-components";

export const MenuDiv = styled.div`
    display: grid;
    justify-items: center;
    
    & button {
        width: 100px;
        padding: 10px 20px;
        margin-top: 20px;
        background-color: #3751FF;
        color: #fff;
        border: none;
        font-family: 'Mulish', sans-serif;
        border-radius: 8px;
    }

    & button:focus {
        border: none;
    }

    & button:hover {
        background-color: #4169E1;
    }
`;