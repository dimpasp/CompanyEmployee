import React from "react";
import { Form } from "react-bootstrap";
import axios from 'axios';




class EmployeeForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


    this.state = {
      id: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      email: '',
      loading: true,
      fields: {},
      errors: {}
    }
  }

  //Oυσιαστικα εδω κανουμε state την καινουργια τιμη στο input.
  handleChange(event) {
    console.log(event.target.name);
    const { name, value } = event.target;
    this.setState({  [name]: value });
  
  }

  handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //firstName
    if(!fields["firstName"]){
       formIsValid = false;
       errors["firstName"] = "Cannot be empty";
    }

    if(typeof fields["firstName"] !== "undefined"){
       if(!fields["firstName"].match(/^[a-zA-Z]+$/)){
          formIsValid = false;
          errors["firstName"] = "Only letters";
       }        
    }

     //lastName
     if(!fields["lastName"]){
        formIsValid = false;
        errors["lastName"] = "Cannot be empty";
     }
 
     if(typeof fields["lastName"] !== "undefined"){
        if(!fields["lastName"].match(/^[0-9\b]+$/)){
           formIsValid = false;
           errors["lastName"] = "Only letters";
        }        
     }

    //Email
    if(!fields["email"]){
       formIsValid = false;
       errors["email"] = "Cannot be empty";
    }

     //Address
     if(!fields["address"]){
        formIsValid = false;
        errors["address"] = "Cannot be empty";
     }

     //Phone
     if(!fields["phone"]){
        formIsValid = false;
        errors["phone"] = "Cannot be empty";
     }
     if(typeof fields["phone"] !== "undefined"){
        if(!fields["phone"].match(/^[0-9\b]+$/)){
           formIsValid = false;
           errors["phone"] = "Only number";
        }        
     }

    

   this.setState({errors: errors});
   return formIsValid;
}

  

  // Aυτη η μεθοδος χρησιμοποιειται για να κανουμε ενημερωση το αντικειμενο(φορμα στην περιπτωση).
  handleSubmit = (event) => {
    event.preventDefault()
    if(this.handleValidation()){
        alert("Form submitted");
     }else{
        alert("Form has errors.")
     }

    // Ουσιαστικα μεσω του axios στελνουμε τα δεδομενα.
    axios
      .post('https://localhost:5001/Employee', this.state)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      // log request error and prevent access to undefined state
      .catch(err => {
        this.setState({ loading: false, error: true });
        console.error(err);
      })
  }


  render() {


    // να εμφανισει μνμ εαν αποτυχει το request
    if (this.state.error) {
      return (
        <div>
          <p> An error occured </p>
        </div>
      )
    }

    return (
      <div>
        <h1 style={{ textAlign: 'center', marginTop: 10 }}>Add Course</h1>
        <form id="contact-form" onSubmit={this.handleSubmit}>
          <Form.Group >
            <Form.Label>Title Name</Form.Label>
            <Form.Control type="text" name="firstName"  placeholder="firstName" value={this.state.firstName} onChange={(e) => { this.handleChange(e) }} />
            <span style={{color: "red"}}>{this.state.errors["firstName"]}</span>
          </Form.Group>
          <Form.Group >
            <Form.Label>lastName</Form.Label>
            <Form.Control type="text" name="lastName"  placeholder="lastName" value={this.state.lastName} onChange={(e) => { this.handleChange(e) }} />
            <span style={{color: "red"}}>{this.state.errors["lastName"]}</span>
          </Form.Group>
          <Form.Group >
            <Form.Label>phone</Form.Label>
            <Form.Control type="text" name="phone"  placeholder="phone" value={this.state.phone} onChange={(e) => { this.handleChange(e) }} />
            <span style={{color: "red"}}>{this.state.errors["phone"]}</span>
          </Form.Group>
          <Form.Group >
            <Form.Label>address</Form.Label>
            <Form.Control type="text" name="address"  placeholder="address" value={this.state.address} onChange={(e) => { this.handleChange(e) }} />
            <span style={{color: "red"}}>{this.state.errors["address"]}</span>
          </Form.Group>
          <Form.Group >
            <Form.Label>email</Form.Label>
            <Form.Control type="text" name="email"  placeholder="email" value={this.state.email} onChange={(e) => { this.handleChange(e) }} />
            <span style={{color: "red"}}>{this.state.errors["email"]}</span>
          </Form.Group>
          <hr />
          
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default EmployeeForm;