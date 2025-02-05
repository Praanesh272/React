import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {
const[score,setScore]=useState("10");
const[review,setReview]=useState("");
function handlerReview(e){
e.preventDefault();
if(Number(score)<=5 && review.length<=10){
alert("please provide as a valued reason for ur bad rating");
return;
}
console.log("on submit");
setScore("10");
setReview("");
}
return (
<div className="App">
<form onSubmit={handlerReview}>
<fieldset>
<h2>feeadback form</h2>
<div className="Field">
<label>score:</label>
<input type="range" value={score} onChange={(e)=>{setScore(e.target.value)}} min="0" max="30"/>
</div>
<div className="Field">
<textarea style={{height:100,width:400}} value={review} onChange={(t)=>setReview(t.target.value)}/>
</div>
<button type="submit" >submit</button>
</fieldset>
</form>
</div>
);
}
export default App;