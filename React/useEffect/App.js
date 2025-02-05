import logo from './logo.svg';
import './App.css';
import React,{Children, createContext, useContext, useEffect, useMemo, useState} from 'react';

function App() {
  const[normal,setNormal]=useState(0);
  const[normal1,setNormal1]=useState(0);
  useEffect(()=>{
    console.log("hi from effect");
  },[normal]);//this effect is only called when i change the value that i mentioned in the dependence array 
  return (
    <div>
      <h1>{normal}</h1>
      <h2>{normal1}</h2>
      <button type='submit' onClick={()=>setNormal(normal+1)}>submit1</button>
      <button type='submit' onClick={()=>setNormal1(normal1+1)}>submit2</button>
    </div>
  );
}


export default App;
