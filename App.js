import React, {useState} from 'react';
import UserForm from './componente/UserForm';
import Result from './componente/Result';
/* import logo from './logo.svg'; */
import './App.css'; 

function App() {
  const [ state, setState ] = useState ({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    comfirmpassword: ''
  });
  return (
    <div className="App">
      <UserForm input={state} setInput={setState}/>
      <Result data={state}/>
    </div>
  );
}

export default App;
