import styled from "styled-components"

export const Container = styled.div`
width: 380px;
height: 582px;
border-radius: 8px;
background-color: lightgreen;
display: flex;
flex-flow: column nowrap;
align-items: center;
margin: 0 auto;
`;

export const Dashboard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 380px;
heigth: 60px;
margin-top: 40px;
background-color: lightblue;
`;

export const Logo = styled.div`
background-color: #fff
font-size: 60px;
`;

export const SubscribeDash = styled.h2`
color:#9FA2B4;
font-size: 19px;
font-weight: 700;
`;

export const Title = styled.h1`
margin-top: 32px;
color: #000;
font-size: 24px;
font-weight: 700;
`;

export const Subscribe = styled.h2`
color:#9FA2B4;
font-size: 14px;
font-weight: 400;
`;

export const Label = styled.label`
text-transform: uppercase;
font-size: 12px;
color: #9FA2B4;
`;

export const Inputs = styled.input`
display: grid;
width: 316px;
heigth: 42px;
border: none;
`;

export const Button = styled.button`
width: 316px;
heigth: 48px;
background: #3751FF;
box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
border: none;
border-radius: 8px;
font-size: 14px;
color: white;
margin-top: 24px;
`;