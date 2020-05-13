import React from "react";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  background-color: #fff;
  padding: 3rem;
  border-radius: 0.6rem;
  max-width: 800px;
  margin: 10rem 0;

  @media (min-width:992px){
      margin-top:10rem;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    padding-left: 4rem;
    text-align: center;
    position: relative;

    &::before {
      content: 'open-quote';
      color: black;
      font-size: 10rem;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }
  p{
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  font-size:1.6rem;
  text-align:right;
  color:#666;
  margin-top: 2rem;
}

`;

const Frase = ({ frase }) => {
  return (
    <Contenedor>
      <p>{frase.quote}</p>
      <small>{frase.author}</small>
    </Contenedor>
  );
};

export default Frase;
