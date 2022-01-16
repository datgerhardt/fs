import { Component } from "react";

const Hello = ({name, age}) => {
  // const name = props.name
  // const age = props.age
  // const {name, age} = props

  const bornYear = () =>  new Date().getFullYear() - age
  
  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
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