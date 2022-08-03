import styled from "styled-components";


export const DivContent = styled.div`

& h1{
    text-align: center;
    padding: 3px 8px;
    font-size: 17px;
    border: 1px solid black;
    border-radius: 8px;
}
&>div{
    border: 1px solid black;
    border-radius: 8px;
    margin-bottom: 8px;
}

&>div>div:first-child {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 10px 8px 0 8px;
}

&>div>div:last-child{
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
& div {

    & li {
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
}
`;
