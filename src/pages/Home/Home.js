import React from 'react';
// import { Button } from 'react-bootstrap';
// import { Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import './Home.css';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const { register, handleSubmit,reset} = useForm();
    const onSubmit = data => {
      fetch('http://localhost:5000/idee', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(data)
      })
          .then(res => res.json())
          .then(data => {
              console.log(data)
              if (data.insertedId) {
                  Swal.fire(
                      'Successfully Added Product',
                    )
                  reset()
              }
          })
 };

    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
           <Container>
            <Row>
              <Col xs={12} md={12}> <select {...register("vehicle")} style={{
                width: '100%',
                marginTop: '20px',
                padding: '8px',
                border: '1px solid #e87817',
                borderRadius: '5px',
                marginBottom:'-8px'
              }}>
           <option value="select">Select</option>
           <option value="car">Car</option>
           <option value="bike">Bike</option>
           <option value="scooter">Scooter</option>
           <option value="cycle">Cycle</option>
           <option value="horse">Horse</option>
              </select></Col>
              <Col xs={12} md={6}>
                <input {...register("number")} style={{
                width: '100%',
                marginTop: '20px',
                padding: '8px',
                border: '1px solid #e87817',
                borderRadius: '5px',
                marginBottom:'-8px'
              }} placeholder='Vehicle Number'></input>
              </Col>
         <Col xs={12} md={6}> <input {...register("number")} style={{
                width: '100%',
                marginTop: '20px',
                padding: '8px',
                border: '1px solid #e87817',
                borderRadius: '5px',
                marginBottom:'-8px'
              }} placeholder='Device Id'/></Col>
              
              <Col xs={12} md={12}>
                <input {...register("text")} style={{
                width: '100%',
                marginTop: '20px',
                padding: '8px',
                border: '1px solid #e87817',
                borderRadius: '5px',
                marginBottom:'-8px'
              }} placeholder='Site Location'/></Col>
              
              <Col xs={12} md={12}> <input {...register("text")} style={{
                width: '100%',
                marginTop: '20px',
                padding: '8px',
                border: '1px solid #e87817',
                borderRadius: '5px',
                marginBottom:'-8px'
              }} placeholder='Delivered To'/></Col>
              
              <Col xs={12} md={12}> <select {...register("technology")} style={{
                width: '100%',
                marginTop: '20px',
                padding: '8px',
                border: '1px solid #e87817',
                borderRadius: '5px',
                marginBottom:'-8px'
              }}>
           <option value="select">Select</option>
           <option value="newInstallation">New Installation</option>
           <option value="deviceTransfer">Device Transfer</option>
           <option value="gps">GPS Un-installation</option>
           <option value="mdvr">MDVR Service</option>
              </select></Col>     
              <Col xs={12} md={12}>
                <textarea name="" id="" cols="30" rows="4" style={{
                width: '100%',
                marginTop: '20px',
                padding: '8px',
                border: '1px solid #e87817',
                borderRadius: '5px',
                marginBottom:'5px'
              }} placeholder='Remarks' ></textarea>
              </Col>
              <div className='input-group mb-3 px-2 py-2 rounded-pill shadow-sm' style={{backgroundColor:'#ddd',marginLeft:'5px'}}>
              <input id="upload" multiple type="file" className='form-control border-rounded'/>
                <label id="upload-label" for="upload" className='font-weight-light text-body'></label>
                  </div>
              <hr style={{width:'98%',marginLeft:'11px'}}/>
            </Row>
            <div
                  style={{
                       boxSizing: 'border-box',
                       border: '2px dashed gray',
                       color: 'white',
                       width: '100%',
                       padding: '8px',
                       marginBottom:'-8px'
                     }}>
                .</div>
                <hr style={{ width: '1115px' }} />
             <input type="submit" style={{
                backgroundColor: '#0dcaf0',
                border:'1px solid #0dcaf0',
                padding:'6px 10px',
                borderRadius: '5px',
                margin:'5px'
              }}/>
            <input type="reset" value="Clear"
              style={{
                backgroundColor: '#ffc107',
                border:'1px solid #ffc107',
                padding:'6px 10px',
                borderRadius: '5px',
                margin:'5px'
              }} />
            <Button variant='primary' style={{
              margin: '5px',
              color: 'white',
            }}>
              <Link to='/signature' style={{textDecoration:'none',color:'white'}}>Next</Link>
            </Button>
          </Container>
        </form> 
      </>
    );
};

export default Home;