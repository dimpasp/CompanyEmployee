import React, {useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteEmployee, GetAllEmployee } from '../services/Employee';
import { Button, Table  } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Form.css";



export default () => {
    const [searchTerm,setSearchTerm] = useState("");
    const employee = useSelector(state => state.actionsRedux.employee);

     //hook του react-redux για να παρουμε την εκασθοτε αλλαγη που θελουμε
    const dispatch = useDispatch();

    useEffect(() => {
        GetAllEmployee(dispatch);
    }, [dispatch]);

    return(
        <div>
              <input className="searchbox" placeholder="Search Employee" onChange={event=>{setSearchTerm(event.target.value);}}/>  
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
            {employee.filter((val)=>{
                if(searchTerm ==""){
                    return val;
                }else if(val.firstName.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return val;
                }
            }).map(post =>
            <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.firstName}</td>
                <td>{post.lastName}</td>
                <td>{post.phone}</td>
                <td>{post.address}</td>
                <td>{post.email}</td>
                <td><Link to={`/EmployeeDetails/${post.id}`}><Button color="success">Edit</Button></Link></td>   
                <td> <Button className='btn btn-danger' onClick={() =>{ if(window.confirm('Delete the item?')) DeleteEmployee(dispatch, post)}}>Delete</Button> </td>  
            </tr>
            )}
        </tbody>
    </Table>
        <a className="btn btn-success" href="/EmployeeForm" role="button">Add</a>
    </div>      
    )
}