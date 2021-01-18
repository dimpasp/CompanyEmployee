import React from 'react';
import './App.css';
import {EmployeeList} from './components/EmployeeList';


const App=()=> {
  return (
    <div className="App">
     <h3>Employees</h3>
     <div style={{maxWidth:'70%',margin:'auto'}}>
       <EmployeeList />
     </div>
    </div>
  );
}

export default App;
