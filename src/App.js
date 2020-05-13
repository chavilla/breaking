import React,{useState,useEffect} from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

//Styled

const Contenedor=styled.div`
display:flex;
align-items:center;
padding-top: 5rem;
font-size:2rem;
flex-direction:column;
`;

const Boton=styled.button`
background:#333;
background-size:300px;
font-family:Arial, Helvetica, sans-serif;
color:#ffffff;
margin-top:3rem;
font-size:2rem;
border:none;

:hover{
  background:transparent;
}

`;

function App() {

  //useState
  const [frase,setFrase]=useState({
    quote:'',
    author:''
  });

  //functions
  const consultarApi= async ()=>{
    const api=await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const frase=await api.json()
    setFrase(
      frase[0])
    }

    //useEffect
    useEffect(()=>{
        consultarApi();
    },[])

  return (
    <Contenedor>
       <Frase
        frase={frase}
        />
       <Boton
       onClick={consultarApi}
       >Obtener frase</Boton>
       
    </Contenedor>
     
  );
}

export default App;
