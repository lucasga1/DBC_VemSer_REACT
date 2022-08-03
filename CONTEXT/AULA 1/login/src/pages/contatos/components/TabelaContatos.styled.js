import styled from "styled-components";

export const DivContent = styled.div`
    display: grid;
    justify-items: center;
    width: 200px;
    
    & h1{
        padding: 3px 8px;
        font-size: 17px;
        border: 1px solid black;
        border-radius: 8px;
    }

    & div>div:first-child{
        justify-items: center;
        width: 200px;
        margin-bottom: 8px;
        border: 1px solid black;
        border-radius: 8px;

        & p {
            font-weight: 700;
            padding-left: 15px;
            margin-bottom: 0;
        }

        & p:first-child {
            padding-top: 15px;
            border-top: none;
        }

        & span {
            font-weight: 500;
        }
        
        &>div{
            display: grid;
            grid-template-columns: 1fr 1fr;
            justify-items: center;

        & button {
            margin: 8px 0 10px 0;
            font-size: 12px;
            width: 90px;
            height: 25px;
            cursor: pointer;
        }
        
        & button:hover {
            background-color: #4169E1;
        }
    }
    }




`;