import { React, useState, useEffect } from 'react';
import { Form, Button } from "react-bootstrap";
import { EditEmployee, NewEmployee } from '../services/Employee';
import { useDispatch } from 'react-redux';

export default ({ employee, setIsEditing }) => {

  const [firstName, setfirstName] = useState(0);
  const [lastName, setlastName] = useState(0);
  const [email, setemail] = useState(0);
  const [address, setaddress] = useState(0);
  const [phone, setphone] = useState(0);
  const [isNewEmployee, setIsNewEmployee] = useState(true);
  const dispatch = useDispatch();


  useEffect(() => {
    if (employee !== undefined) {
      setIsNewEmployee(false);
      setfirstName(employee.firstName);
      setlastName(employee.lastName);
      setemail(employee.email);
      setaddress(employee.address);
      setphone(employee.phone);
    }
    else {
      setIsNewEmployee(true);
    }
  }, [employee]);



  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNewEmployee) {
      NewEmployee(dispatch, { lastName: lastName, firstName: firstName, email: email, address: address, phone: phone });
    }
    else {
      EditEmployee(dispatch, { lastName: lastName, firstName: firstName, email: email, address: address, phone: phone });
      setIsEditing(false);
    }
  };


  return (

    <Form onSubmit={handleSubmit}>
      <Form.Group onChange={event => setfirstName(event.target.value)}>
        <Form.Label>First Name:</Form.Label>
        <Form.Control placeholder="First Name" />
      </Form.Group>
      <Form.Group onChange={event => setlastName(event.target.value)}>
        <Form.Label>Last Name :</Form.Label>
        <Form.Control placeholder="Last Name" />
      </Form.Group>
      <Form.Group onChange={event => setemail(event.target.value)}>
        <Form.Label>Email :</Form.Label>
        <Form.Control placeholder="Email" />
      </Form.Group>
      <Form.Group onChange={event => setaddress(event.target.value)}>
        <Form.Label>Address :</Form.Label>
        <Form.Control placeholder="Address" />
      </Form.Group>
      <Form.Group onChange={event => setphone(event.target.value)}>
        <Form.Label>Phone:</Form.Label>
        <Form.Control placeholder="Phone" />
      </Form.Group>
      <div style={{ marginTop: 'auto' }}>
        {
          isNewEmployee ? <Button variant='primary' type='submit'>Add</Button>
            :
            <div>
              <Button style={{ marginRight: '2px' }} variant='success' type='submit'>Save</Button>
            </div>}
      </div>

    </Form>
  )
}

