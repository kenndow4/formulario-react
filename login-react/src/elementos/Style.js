
import styled from 'styled-components';

const Parra = styled.h1`
text-align:center;
margin: 5px;
font-size: 22px;

`;

const Cont = styled.form`

background: #fff;
padding: 15px;
margin: 20px auto;
width:30%;
`;


const Input = styled.input`
width:100%;
heigth:100%;
padding:10px;
border-radius:2px;
margin: 5px 0;
border: none;
border: ${props=>props.sub? "none":"solid 1px #ccc"};
color:${props=>props.sub?"#fff":""};
font-size:${props=>props.sub?"17px":"15px"};
background: ${props=>props.sub?"#00acee":""};
`;

const Error = styled.p`
color:red;
text-align:center;
background:pink;
border: solid 1px red;
padding: 20px;
margin: 20px 0px;
font-size: 15px;
display: none;

`;
const Succes = styled.p`
color:green;
text-align:center;
background: lightgreen;
border:green solid 1px;
padding: 20px;
margin: 20px 0px;
font-size: 15px;
display: none;

`;


export {Cont, Input,Parra, Error, Succes};