import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from "./App";



function Componente ({titulo,contenido}){
  return (
    <div>
      <h1>{titulo}</h1>
      <div>{contenido}</div>
  </div> 
  );
}

ReactDOM.render(<App />,document.getElementById('root')
);

