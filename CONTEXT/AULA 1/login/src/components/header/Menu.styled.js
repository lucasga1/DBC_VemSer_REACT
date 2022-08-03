import styled from "styled-components";

export const MenuDiv = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 
    & button {
    width: 100px;
    padding: 10px 10px;
    background-color: #3751FF;
    color: #fff;
    border: none;
    font-family: 'Mulish', sans-serif;
    border-radius: 8px;
    cursor: pointer;
    }

    & button:focus {
    border: none;
    }

    & button:hover {
    background-color: #4b70e0;
    }
`;