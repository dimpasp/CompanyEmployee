import { React, useState, useEffect } from 'react';
import { Form, Button } from "react-bootstrap";
import { EditEmployee, NewEmployee } from '../services/Employee';
import { useDispatch } from 'react-redux';
import "./Form.css";

export default ({ employee, setIsEditing }) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [isNewEmployee, setIsNewEmployee] = useState(true);

  //hook του react-redux για να παρουμε την εκασθοτε αλλαγη που θελουμε
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
    const isValid = formValidation();
    if (isValid) {
      alert("Form submitted");
      e.preventDefault();
      if (isNewEmployee) {
        NewEmployee(dispatch, { lastName: lastName, firstName: firstName, email: email, address: address, phone: phone });
      }
      else {
        EditEmployee(dispatch, { lastName: lastName, firstName: firstName, email: email, address: address, phone: phone });
        setIsEditing(false);
      }
    } else {
      alert("FORM INVALID - DISPLAY ERROR MESSAGE");
     
    }
  }

  const [lastNameError, setlastNameError] = useState({});
  const [firstNameError, setfirstNameError] = useState({});
  const [emailError, setemailError] = useState({});
  const [addressError, setaddressError] = useState({});
  const [phoneError, setphoneError] = useState({});

  const formValidation = () => {

    //create empty error list foreach value
    const lastNameError = {};
    const firstNameError = {};
    const addressError = {};
    const emailError = {};
    const phoneError = {};
    let isValid = true;

    //first name
    if (!firstName) {
      firstNameError["firstName"] = "First Name Cannot be empty";
      isValid = false;
    }


    if (!firstName.match(/^[a-zA-Z]+$/)) {
      firstNameError["firstName"] = "First Name must have only letters";
      isValid = false;
    }


    //lastName
    if (!lastName) {
      lastNameError["firstName"] = "Last Name cannot be empty";
      isValid = false;
    }

    if (!lastName.match(/^[a-zA-Z]+$/)) {
      lastNameError["lastName"] = "Last Name must have only letters";
      isValid = false;
    }

    //Email
    if (!email) {
      emailError["email"] = "Email cannot be empty";
      isValid = false;
    }
   
    //Address
    if (address.trim().length < 1) {
      addressError["address"] = "Address cannot be empty";
      isValid = false;
    }

    //Phone
    if (phone.trim().length < 1) {
      phoneError["phone"] = "Phone cannot be empty";
      isValid = false;
    }

    if (!phone.match(/^[0-9\b]+$/)) {
      phoneError["phone"] = "Phone must have only number";
      isValid = false;
    }

    //fill error list foreach value.If exist errors.
    setlastNameError(lastNameError);
    setfirstNameError(firstNameError);
    setaddressError(addressError);
    setemailError(emailError);
    setphoneError(phoneError);

    return isValid;
  }

  return (
    <Form id="contact-form" onSubmit={handleSubmit}>
      <Form.Group value={firstName} onChange={event => setfirstName(event.target.value)}>
        <Form.Label>First Name:</Form.Label>
        <Form.Control placeholder="First Name" />
        {Object.keys(firstNameError).map((key) => {
          return <div style={{ color: "red" }}>{firstNameError[key]}</div>
        })}
      </Form.Group>
      <Form.Group value={lastName} onChange={event => setlastName(event.target.value)}>
        <Form.Label>Last Name :</Form.Label>
        <Form.Control placeholder="Last Name" />
        {Object.keys(lastNameError).map((key) => {
          return <div style={{ color: "red" }}>{lastNameError[key]}</div>
        })}
      </Form.Group>
      <Form.Group value={email} onChange={event => setemail(event.target.value)}>
        <Form.Label>Email :</Form.Label>
        <Form.Control placeholder="Email" />
        {Object.keys(emailError).map((key) => {
          return <div style={{ color: "red" }}>{emailError[key]}</div>
        })}
      </Form.Group>
      <Form.Group value={address} onChange={event => setaddress(event.target.value)}>
        <Form.Label>Address :</Form.Label>
        <Form.Control placeholder="Address" />
        {Object.keys(addressError).map((key) => {
          return <div style={{ color: "red" }}>{addressError[key]}</div>
        })}
      </Form.Group>
      <Form.Group value={phone} onChange={event => setphone(event.target.value)}>
        <Form.Label>Phone:</Form.Label>
        <Form.Control placeholder="Phone" />
        {Object.keys(phoneError).map((key) => {
          return <div style={{ color: "red" }}>{phoneError[key]}</div>
        })}
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