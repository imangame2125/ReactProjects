import React, { useContext } from "react";
import styled from "styled-components";

const Wrapper = styled.div`

`
const Title = styled.h1`
  width:40%;
  background:#a4bbc2;
  color:white;
  font-size:40px;
`
const Age = styled.div`
width:40%;
background:#a4bbc2;
color:white;
font-size:40px;
`
const City = styled.div`
width:40%;
background:#a4bbc2;
color:white;
font-size:40px;
`
const Height = styled.div`
width:40%;
background:#a4bbc2;
color:white;
font-size:40px;
`
const BackBtn = styled.button`
width: 220px;
height: 50px;
color: #fff;
background: #111;
cursor: pointer;
position: relative;
z-index: 0;
border-radius: 10px;
text-align:center;
font-size:40px; 

&:before {
  content:'';
  background:linear-gradient(45deg,#ff0000,#ff7300,#fffb00,#48ff00,#00ffd5,#002bff,
    #7a00ff,#ff00c8,#ff0000);
    position:absolute;
    top:-2px;
    left:-2px;
    background-size:400%;
    z-index:-1;
    filter:blur(5px);
    width:calc(100% + 4px);
    height:calc(100% + 4px);
    animation:glowing 20s linear infinite;
    opacity:0;
    transition:opacity .3s ease-in-out;
    border-radius:10px;
}
&:active {
  color:#000;
}

&:active:after {
  background:transparent;
}

&:before {
  opacity:1;
}

&:after {
  z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
}
`

export default function Person({ person, onBackClick }) {

  


  function handleBackClick(ali) {
    onBackClick(ali)
  }
  return (
    <Wrapper>
      <Title>{person.name}</Title>
      <Age>{[person.age]}</Age>
      <City>{person.city}</City>
      <Height>{person.height}</Height>
      {/* {onBackClick && <BackBtn onClick={onBackClick}>Back</BackBtn>} */}
      {onBackClick && <BackBtn onClick={() => handleBackClick('ali')}>Back</BackBtn>}
    </Wrapper>
  )
}