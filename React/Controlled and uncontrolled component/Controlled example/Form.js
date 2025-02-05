import React, { useRef } from 'react';
const Form = () => {
const myInputReference = useRef(null); // You can name it whatever you want
const handleSubmit = (e) => {
e.preventDefault();
const inputValue = myInputReference.current.value; // Access the value using your chosen name
console.log(inputValue); // Do something with the value
};
return (
<form onSubmit={handleSubmit}>
<input ref={myInputReference} type="text" /> {/* Use the ref with the new name */}
<button type="submit">Submit</button>
</form>
);
};
export default Form;