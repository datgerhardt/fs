import { Component } from "react";

const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
};

const App = () => {
  let age = 10;
  let name = "Peter";

  return (
  <div>
    <h1> Greeting   </h1>
    <Hello name='Kofi' age={24 + 45}/>
    <Hello name={name} age={age}/>
    
  </div>
)}

export default App;