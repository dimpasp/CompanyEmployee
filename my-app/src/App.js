import React from 'react';
import './App.css';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import EmployeeDetails from './components/EmployeeDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';




const App=()=> {
  return (
    <>
    <Router>
    <NavBar />
       <Switch>
          <Route exact path='/EmployeeList' component={EmployeeList} />
          <Route exact path='/EmployeeForm' component={EmployeeForm} />
          <Route exact path='/EmployeeDetails/:id' component={EmployeeDetails} />
        </Switch>     
    </Router>
    </>

  );
}

export default App;
