import React from 'react';
import './App.css';
import Hello from './Hello';

function App({name, age}) {
  return <div>
          Hello from {name}
          <br/>
          Age = {age}
          <br />
          <Hello firstName = {name}></Hello>
          <br />
          <strong> My name is : {name} </strong>
          <h1>List of courses</h1>
          <ol>
            <p>Artificial Intelligence</p>
            <p>Cloud Computing</p>
            <p>Machine Learning</p>
          </ol>
        
        </div>
}

export default App;
