// import logo from './logo.svg';
// import './App.css';

import { Component } from "react";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
};

const App = () => {
  // var now = new Date();
  var age = 10;
  var name = "Peter";
  // console.log('Hello from Component')
  return (
  <div>
    {/* <p>Hello world, it is now {now.toString()} </p> */}
    {/* <p>{a} plus {b} is {a + b} </p> */}
    <h1> Greeting   </h1>
    <Hello name='Kofi' age={24 + 45}/>
    <Hello name={name} age={age}/>
    
  </div>
)}

export default App;