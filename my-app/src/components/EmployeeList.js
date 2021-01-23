import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteEmployee, GetAllEmployee } from '../services/Employee';
import { Button, Table  } from 'react-bootstrap';
import { Link } from "react-router-dom";



export default () => {
    
    const employee = useSelector(state => state.actionsRedux.employee);

     //hook του react-redux για να παρουμε την εκασθοτε αλλαγη που θελουμε
    const dispatch = useDispatch();

    useEffect(() => {
        GetAllEmployee(dispatch);
    }, [dispatch]);

   

    return(
        <div>
    <Table style={{width: '100%',height: '50%'}} variant="dark">
        <thead>
            <tr>
                <td>#</td>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Phone</td>
                <td>Address</td>
                <td>Email</td>
            </tr>
        </thead>
        <tbody>
            {employee.map(post =>
            <tr>
                <td>{post.id}</td>
                <td>{post.firstName}</td>
                <td>{post.lastName}</td>
                <td>{post.phone}</td>
                <td>{post.address}</td>
                <td>{post.email}</td>
                <td><Link to={`/EmployeeDetails/${post.id}`}>
              <Button color="success">Edit</Button></Link></td>                   
            </tr>
            )}
        </tbody>
    </Table>
        <a className="btn btn-success" href="/EmployeeForm" role="button">Add</a>
    </div>
          
    )
}