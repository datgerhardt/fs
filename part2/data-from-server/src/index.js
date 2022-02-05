import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';


let url = 'http://localhost:3001/'
axios.get(url+'notes').then(
  res => {  
    const notes = res.data 
    
    ReactDOM.render(
      <App  notes={notes}/>,
    document.getElementById('root')
    );

  })
// promise.then(res => console.log(res))

// const promise2 = axios.get(url+'foobar')
// console.log(promise2)

