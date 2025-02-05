import logo from './logo.svg';
import './App.css';
import React,{Children, createContext, useContext, useMemo, useState} from 'react';
const RenderMain=createContext(undefined);
function App() {
  const[name,setName]=useState("");
  const[score,setScore]=useState(0);
const doubleTicker=sleeper();
function sleeper(){
  for(let i=0;i<100;i++){
    console.log(i);
  }
}
  const nothing=useMemo(()=>({setName,setScore} ),[name,score]);
  function handlerClick(){
    setScore(score+1);
    console.log("inside score");
  }
  return (
   <RenderMain.Provider value={nothing}>
    <button onClick={handlerClick}>click here</button>
      <Fname/>
   
   </RenderMain.Provider>
  );
}
function printMe(){
  console.log("inside fname")
}
const Fname=React.memo(function Fname(){
  const{name,score,setName}=useContext(RenderMain);
  return(
    <>
  <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
  {printMe()}
  <p>Name:{name}</p>
  </>
  );
});

export default App;
