import React, { useState } from "react"
import Form from './components/Form'
import Results from './components/Results'
import './App.css';

function App() {
  const [state, setState] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  });

  // const handleFormChange = (e) => {
  //   setState({
  //     ...state,
  //     [e.target.name]: e.target.value
  //   })
  // };

  return (
    <div className="App">
      <Form inputs={state} setInputs={setState}/>
      {/* <Results data={state}/> */}

      <input type='submit' value='Create a new User'/>
    </div>
  );
}

export default App;
