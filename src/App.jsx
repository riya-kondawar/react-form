// src/App.js
// import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const[ values, setValues] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    resume: '',
    about: ''
  })

  const handleChanges = (e) => {
    setValues({...values, [e.target.name]:[e.target.value]})
  } 

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
  }

  const ResetFunc = () => {
    setValues({
      fullname:'',
      email:''
    })
  }
  return (

    <div>
      {/* <h2>Register for hackathon</h2> */}
      <div class="container" id="container">
        <div class="form-container sign-in-container">
          <form action="#" onSubmit={handleSubmit}>

            <h1>Register User</h1>

            <label htmlFor="fullName">Full Name*</label>
            <input type="text" name="firstName" id="" placeholder="Enter First Name" required value={values.fullname}
            onChange = {(e) => handleChanges(e)} />
            

            <label htmlFor="email">Email*</label>
            <input type="email" name="email" id="email" placeholder='Enter Email'required value={values.email}
            onChange = {(e) => handleChanges(e)} />

            <label htmlFor="phone">Phone No.*</label>
            <input type="text" name="phone" id="phone" placeholder='Enter Phone No.' required value={values.phone}
            onChange = {(e) => handleChanges(e)} />

            <label htmlFor="gender">Gender</label>
            <div className="gender">
              <input type="radio" name="gender" id="male" 
              onChange = {(e) => handleChanges(e)} />Male
              <input type="radio" name="gender" id="female" 
              onChange = {(e) => handleChanges(e)} />Female
              <input type="radio" name="gender" id="other" 
              onChange = {(e) => handleChanges(e)} />Other
            </div>

            <label htmlFor="resume">Resume</label>
            <input type="file" name="resume" id="resume" placeholder='Select Resume' 
            onChange = {(e) => handleChanges(e)} />

            <label htmlFor="about">About</label>
            <textarea name="about" id="about" placeholder="I'm a Computer Science Undergrad studying in MIT college" rows="3" cols="35" 
            onChange = {(e) => handleChanges(e)} ></textarea>

            <div className="btns">
              <button type="button" onClick={ResetFunc} >Reset</button>
              <button type="submit">Submit</button>
            </div>

          </form>
        </div>

        <div class="overlay">
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start journey with us</p>
          <button class="ghost" id="signUp">Begin the show!</button>
        </div>
      </div>

      <footer>
        <p>
          Created with <b><span>love</span></b><i class="fa fa-heart"></i> by Riya
        </p>
      </footer>
    </div>
  );
}

export default App;
