import React, { Component } from 'react';
import axios from 'axios';
import { Form,Button  } from "react-bootstrap";
import "./Form.css";



class EditEmployee extends Component {
    constructor(props) {
        super(props)
        this.state = {
          id:'',
          firstName: '',
          lastName: '',
          phone: '',
          address: '',
          email: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
      }
     
      componentDidMount(id) {
        let eId = this.props.match.params.id;
        axios.get(`https://localhost:5001/Employee/${eId}`)
        .then(response => {
          this.setState({
            id: response.data.id,
            firstName:response.data.firstName,
            lastName:response.data.lastName,
            phone:response.data.phone,
            address:response.data.address,
            email:response.data.email
          }, () => {
            console.log(this.state);
          });
        }) .catch(error => {
            console.log(error)
            this.setState({ errorMsg: 'Error retreiving data' })
          })
      }



      onSubmit(id, e){
        e.preventDefault();
        axios.put(`https://localhost:5001/Employee/${this.state.id}`, this.state)
          .then(response => {
            console.log(response);       
          }).catch(err => console.log(err));
          this.props.history.push('/CourseForm'); 
      }

  deleteRow(id, e){
    let eId = this.props.match.params.id;
    axios.delete(`https://localhost:5001/Employee/${eId}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
  
      })
  
  }

 
  handleInputChange(e){
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }


  render(){
    return (
        this.state?
     <div >
        <br />
       <h1 style={{textAlign:'center',marginTop:30 }}>Edit Employee</h1>
       <form id="contact-form" onSubmit={(e)=>this.onSubmit(this.state.id,e)}>
          <Form.Group >
            <Form.Label> Name  </Form.Label>
            <Form.Control type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
          </Form.Group>
          <Form.Group >
            <Form.Label> lastName  </Form.Label>
            <Form.Control type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} />
          </Form.Group>
          <Form.Group >
            <Form.Label> phone  </Form.Label>
            <Form.Control type="text" name="phone" value={this.state.phone} onChange={this.handleInputChange} />
          </Form.Group>
          <Form.Group >
            <Form.Label> address  </Form.Label>
            <Form.Control type="text" name="address" value={this.state.address} onChange={this.handleInputChange} />
          </Form.Group>
          <Form.Group >
            <Form.Label> email  </Form.Label>
            <Form.Control type="text" name="firstName" value={this.state.email} onChange={this.handleInputChange} />
          </Form.Group>
          <Button variant='primary' type='submit'>Add</Button>
          <button className="btn btn-danger" style={{float: 'right'}} onClick={(e) => this.deleteRow(this.state.id, e)}>Delete</button>
        </form>
      </div>: "loading" 
    )
  }
}

export default EditEmployee;