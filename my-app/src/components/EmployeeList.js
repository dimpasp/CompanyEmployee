import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteEmployee, GetAllEmployee } from '../services/Employee';
import { Button, Table  } from 'react-bootstrap';

export default () => {
    const employee = useSelector(state => state.actionsRedux.employee);
    const dispatch = useDispatch();

    useEffect(() => {
        GetAllEmployee(dispatch);
    }, [dispatch]);

    return(
    <Table variant="dark">
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
                <td><Button className='btn btn-danger' color="danger" onClick={(e) => { if(window.confirm('Delete the item?')) DeleteEmployee(dispatch, e)}}>Delete</Button> </td>
            </tr>
            )}
        </tbody>
    </Table>
    )
}
