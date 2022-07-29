import styled from "styled-components"

export const Container= styled.div`
display: flex;
flex-direction: column; 
justify-content: center;
align-items: center;
width: 380px;
height: 580px;
margin: 0 auto;
border-radius: 8px;
background-color: #f3f3f3;
`;

export const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const Dashboard = styled.div`
text-align: center;
margin-top: 40px;

`;

export const Logo = styled.div`
background-color: #fff
font-size: 60px;
`;

export const Title = styled.h1`
margin-top: 32px;
color: #000;
font-size: 24px;
font-weight: 700;
`;

export const SubscribeDash = styled.h2`
color:#9FA2B4;
font-size: 19px;
font-weight: 700;
margin-top: 12px;
`;


export const Subscribe = styled.h2`
color:#9FA2B4;
font-size: 14px;
font-weight: 400;
margin-top: 12px;
`;

export const Label = styled.label`
margin: 10px 0 6px 0;
text-transform: uppercase;
font-size: 12px;
font-weight: 700;
color: #9FA2B4;
`;

export const Inputs = styled.div`
&{ 
display: grid;
width: 316px;
heigth: 42px;
padding: 10px;
border: none;
}
`;

export const P = styled.p`
font-size: 14px;
color: #9FA2B4;
text-align: center;
margin-top: 32px;
`;

export const SpanSignup = styled.span`
color: #3751FF;
padding-left: 5px;
`;

export const SpanForgot = styled.span`
font-size: 10px;
font-weight: 400;
color: #9FA2B4;
padding-left: 142px;
`;