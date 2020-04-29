import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
  Button, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors} from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


  class Contact extends Component {

    handleSubmit(values) {
        this.props.postFeedback(values.firstname, values.lastname, values.telnum, values.email, values.contactType, values.message);
        // console.log('Current State is: ' + JSON.stringify(values));
        // alert('Current State is: ' + JSON.stringify(values));
        this.props.resetFeedbackForm();
        // event.preventDefault();
    }

    render() {
      return(
        <div className="container body">

          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
              <BreadcrumbItem active>Contact Us</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>Contact Us</h3>
              <hr />
            </div>
          </div>

          <div className="row row-content">
            <div className="col-12">
              <h3>Location Information</h3>
            </div>
            <div className="col-12 col-sm-4 offset-sm-1">
              <h5>Our Address</h5>
              <address>
                121, Clear Water Bay Road<br />
                Clear Water Bay, Kowloon<br />
                HONG KONG<br />
              <i className="fa fa-phone"></i>: +852 1234 5678<br />
              <i className="fa fa-fax"></i>: +852 8765 4321<br />
              <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
              </div>
              <div className="col-12 col-sm-6 offset-sm-1">
                <h5>Map of our Location</h5>
              </div>
              <div className="col-12 col-sm-11 offset-sm-1">
                <div className="btn-group" role="group">
                  <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                  <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                  <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                </div>
              </div>
          </div>

    <div className="row row-content">
      <div className="col-12">
        <h3>Send us your Feedback</h3>
      </div>
      <div className="col-12 col-md-9">
        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
          <Row className="form-group">
            <Label htmlFor="firstname" md={2}>First Name</Label>
            <Col md={10}>
              <Control.text model=".firstname" id="firstname" name="firstname"
                placeholder="First Name"
                className="form-control"
                validators={{
                  required, minLength: minLength(3), maxLength: maxLength(15)
                }}
                />
              <Errors className="text-danger" model=".firstname"
                show="touched"
                messages={{ required: 'Required',
                  minLength: 'Must be greater than 2 characters',
                  maxLength: 'Must be 15 characters or less'}}/>
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="lastname" md={2}>Last Name</Label>
            <Col md={10}>
              <Control.text model=".lastname" id="lastname" name="lastname"
                placeholder="Last Name"
                className="form-control"
                validators={{required, minLength: minLength(3), maxLength: maxLength(15)}}/>
              <Errors className="text-danger"  model=".lastname"
                show="touched"messages={{required: 'Required',
                  minLength: 'Must be greater than 2 characters',
                  maxLength: 'Must be 15 characters or less'}}/>
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
            <Col md={10}>
              <Control.text model=".telnum" id="telnum" name="telnum"
                placeholder="Tel. Number"
                className="form-control"
                validators={{required, minLength: minLength(3), maxLength: maxLength(15), isNumber}}/>
              <Errors  className="text-danger"  model=".telnum"
                show="touched"
                messages={{  required: 'Required',
                  minLength: 'Must be greater than 2 numbers',
                  maxLength: 'Must be 15 numbers or less',
                  isNumber: 'Must be a number'}}  />
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="email" md={2}>Email</Label>
            <Col md={10}>
              <Control.text model=".email" id="email" name="email"
                placeholder="Email"
                className="form-control"
                validators={{required, validEmail}}/>
              <Errors  className="text-danger"  model=".email"  show="touched"  messages={{  required: 'Required',
                  validEmail: 'Invalid Email Address' }} />
            </Col>
          </Row>
          <Row className="form-group">
            <Col  md={2}>
              <Label htmlFor="contactType">
                contact Type
              </Label>
            </Col>
            <Col  md={8}>
              <strong>May we contact you?  </strong>
              <Control.checkbox model=".agree"
                name="agree" id="agree" />
            </Col>
            <Col md={2}>
              <Control.select model=".contactType" id="contactType" placeholder="contact Type" className="form-control">
                <option>E-mail</option>
                <option>TEL.</option>
              </Control.select>
            </Col>
          </Row>

          <Row className="form-group">
            <Label htmlFor="message" md={2}>Your Feedback</Label>
            <Col md={10}>
              <Control.textarea model=".message" id="message" name="message"
                rows="12"
                className="form-control" />
            </Col>
          </Row>
          <Row className="form-group">
            <Col md={{size:10, offset: 2}}>
              <Button type="submit" color="primary">
                Send Feedback
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  </div>
);
}
}

export default Contact;













//
// this.state = {
//   firstname: '',
//   lastname: '',
//   telnum: '',
//   email: '',
//   agree: false,
//   contactType: 'Tel.',
//   message: '',
//   touched:{
//     firstname: false,
//     telnum: false,
//     lastname: false
//   }
// };
//
// this.handleInputChange = this.handleInputChange.bind(this);
// this.handleSubmit = this.handleSubmit.bind(this);
// this.handleBlur = this.handleBlur.bind(this);

// handleInputChange(event) {
//   const target = event.target;
//   const value = target.type === 'checkbox' ? target.checked : target.value;
//   const name = target.name;
//
//   this.setState({
//     [name]: value
//   });
// }
//
// handleSubmit(event) {
//   console.log('Current State is: ' + JSON.stringify(this.state));
//   alert('Current State is: ' + JSON.stringify(this.state));
//   event.preventDefault();
// }
//
// handleBlur = (field) => (evt) => {
//   this.setState({
//     touched: {...this.state.touched, [field]: true}
//   });
// }
//
// validate(firstname,lastname,telnum,email){
//   const errors = {
//     firstname: '',
//     lastname: '',
//     telnum: '',
//     email: ''
//
//   };
//   if (this.state.touched.firstname && firstname.length < 3) {
//     errors.firstname = 'there is an error - too short';
//   }
//   if (this.state.touched.lastname && lastname.length < 3) {
//     errors.lastname = 'there is an error - too short';
//   }
//   const reg = /^\d+$/;
//   if (this.state.touched.telnum && !reg.test(telnum)) {
//     errors.telnum = 'Numbers only';
//   }
//   if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1) {
//     errors.email = 'that is not Email';
//   }
//   return errors;
// }

// <Form onSubmit={this.handleSubmit}>
//   <FormGroup row>
//     <Label htmlFor="firstname" md={2}>First Name</Label>
//     <Col md={10}>
//       <Input type="text" id="firstname" name="firstname"
//         placeholder="First Name"
//         value={this.state.firstname}
//         valid={errors.firstname === ''}
//         invalid={errors.firstname !== ''}
//         onChange={this.handleInputChange}
//         onBlur={this.handleBlur('firstname')} />
//        <FormFeedback>{errors.firstname}</FormFeedback>
//     </Col>
//   </FormGroup>
//   <FormGroup row>
//     <Label htmlFor="lastname" md={2}>Last Name</Label>
//     <Col md={10}>
//       <Input type="text" id="lastname" name="lastname"
//         placeholder="Last Name"
//         value={this.state.lastname}
//         valid={errors.lastname === ''}
//         invalid={errors.lastname !== ''}
//         onChange={this.handleInputChange}
//         onBlur={this.handleBlur('lastname')} />
//        <FormFeedback>{errors.lastname}</FormFeedback>
//     </Col>
//   </FormGroup>
//   <FormGroup row>
//     <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
//     <Col md={10}>
//       <Input type="tel" id="telnum" name="telnum"
//         placeholder="Tel. number"
//         value={this.state.telnum}
//         valid={errors.telnum === ''}
//         invalid={errors.telnum !== ''}
//         onChange={this.handleInputChange}
//         onBlur={this.handleBlur('telnum')} />
//       <FormFeedback>{errors.telnum}</FormFeedback>
//     </Col>
//   </FormGroup>
//   <FormGroup row>
//     <Label htmlFor="email" md={2}>Email</Label>
//     <Col md={10}>
//       <Input type="email" id="email" name="email"
//         placeholder="Email"
//         value={this.state.email}
//         invalid={errors.email !== ''}
//         valid={errors.email === ''}
//         onBlur={this.handleBlur('email')}
//         onChange={this.handleInputChange} />
//       <FormFeedback>{errors.email}</FormFeedback>
//     </Col>
//   </FormGroup>
//   <FormGroup row>
//     <Col md={{size: 6, offset: 2}}>
//       <FormGroup check>
//         <Label check>
//           <Input type="checkbox"
//             name="agree"
//             checked={this.state.agree}
//             onChange={this.handleInputChange} /> {' '}
//             <strong>May we contact you?</strong>
//           </Label>
//         </FormGroup>
//       </Col>
//       <Col md={{size: 3, offset: 1}}>
//         <Input type="select" name="contactType"
//           value={this.state.contactType}
//           onChange={this.handleInputChange}>
//           <option>Tel.</option>
//           <option>Email</option>
//         </Input>
//       </Col>
//     </FormGroup>
//     <FormGroup row>
//       <Label htmlFor="message" md={2}>Your Feedback</Label>
//       <Col md={10}>
//         <Input type="textarea" id="message" name="message"
//           rows="12"
//           value={this.state.message}
//           onChange={this.handleInputChange}></Input>
//       </Col>
//     </FormGroup>
//     <FormGroup row>
//       <Col md={{size: 10, offset: 2}}>
//         <Button type="submit" color="primary">
//           Send Feedback
//         </Button>
//       </Col>
//     </FormGroup>
//   </Form>
