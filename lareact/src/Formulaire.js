import React, { useState } from 'react';
import "./Formulaire.css";
function Formulaire() {

    const [submitting,setSubmitting] = useState(false);
  
      const handleSubmit = event =>{
  
        event.preventDefault();
  
        setSubmitting(true);

        setTimeout(()=> {setSubmitting(false);},3000)
  
        
  
      }
   
    return (

    <div class="testbox">
        {submitting && 
     
     <div>submitting Form ...</div>

     }

<form onSubmit={handleSubmit}>

      
        <div class="banner">
          <h1>Job Application Form</h1>
        </div>
        <p class="top-info">Thank you for your interest in working with us. Please check below for available job opportunities that meet your criteria and send your application by filling out the Job Application Form.</p>
        <div class="item">
          <p>Name<span class="required">*</span></p>
          <div class="name-item">
            <input type="text" name="name" placeholder="First" required/>
            <input type="text" name="name" placeholder="Last" required/>
          </div>
        </div>
        <div class="contact-item">
          <div class="item">
            <p>Email<span class="required">*</span></p>
            <input type="text" name="name" required/>
          </div>
          <div class="item">
            <p>Phone<span class="required">*</span></p>
            <input type="text" name="name" required/>
          </div>
        </div>
        <div class="position-item">
          <div class="item">
            <p>What position are you applying for?<span class="required">*</span></p>
            <select required>
              <option value="1">CEO</option>
              <option value="2">Assistant</option>
              <option value="3">Administration</option>
              <option value="4">Secretary</option>
              <option value="5">intern</option>
            </select>
          </div>
          <div class="item">
            <p>Available start date<span class="required">*</span></p>
            <input type="date" name="bdate" required/>
            <i class="fas fa-calendar-alt"></i>
          </div>
        </div>
        <div class="question">
          <p>What is your current employment status?<span class="required">*</span></p>
          <div class="question-answer">
            <div>
              <input type="radio" value="none" id="radio_1" name="status" required/>
              <label for="radio_1" class="radio"><span>Employed</span></label>
            </div>
            <div>
              <input type="radio" value="none" id="radio_2" name="status" required/>
              <label for="radio_2" class="radio"><span>Self-Employed</span></label>
            </div>
            <div>
              <input type="radio" value="none" id="radio_3" name="status" required/>
              <label for="radio_3" class="radio"><span>Unemployed</span></label>
            </div>
            <div>
              <input type="radio" value="none" id="radio_4" name="status" required/>
              <label for="radio_4" class="radio"><span>Student</span></label>
            </div>
          </div>
        </div>
       
        <div class="question">
          <p>Would you like to list references</p>
          <div class="question-answer">
            <div>
              <input type="radio" value="none" id="radio_5" name="references" />
              <label for="radio_5" class="radio"><span>Yes</span></label>
            </div>
            <div>
              <input type="radio" value="none" id="radio_6" name="references" />
              <label for="radio_6" class="radio"><span>No</span></label>
            </div>
          </div>
        </div>
        <div class="btn-block">
          <button type="submit" >Apply For The Job</button>
        </div>
      </form>
    </div>
    );

}

export default Formulaire;
 
