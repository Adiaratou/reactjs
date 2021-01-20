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

    
    
    
        <br/>
       
        <br/>
        <div class="colums">
          <div class="item">
            <label for="name">Name<span>*</span></label>
            <input id="name" type="text" name="name" required/>
          </div>
          <div class="item">
            <label for="eaddress">Email Address<span>*</span></label>
            <input id="eaddress" type="text"   name="eaddress" required/>
          </div>
          <div class="item">
            <label for="phone">Phone<span>*</span></label>
            <input id="phone" type="tel"   name="phone" required/>
          </div>
          <div class="item">
            <label for="street">Adresse<span>*</span></label>
            <input id="street" type="text"   name="street" required/>
          </div>
          <div class="item">
            <label for="city">Ville<span>*</span></label>
            <input id="city" type="text"   name="city" required/>
          </div>
          <div class="item">
            <label for="state">Pays<span>*</span></label>
            <input id="state" type="text"   name="state" required/>
          </div>
          <div class="item">
            <label for="zip">Zip<span>*</span></label>
            <input id="zip" type="text"   name="zip" required/>
          </div>
        </div>
        <div class="question">
          <label>Etes vous etudiant?</label>
          <div class="question-answer">
            <div>
              <input type="radio" value="none" id="radio_1" name="info"/>
              <label for="radio_1" class="radio"><span>Yes</span></label>
            </div>
            <div>
              <input  type="radio" value="none" id="radio_2" name="info"/>
              <label for="radio_2" class="radio"><span>No</span></label>
            </div>
          </div>
        </div>
        <div class="item">
          <p>Filière</p>
          <select>
            <option selected value="" disabled selected></option>
            <option value="b" >Informatique</option>
            <option value="ch">Droit</option>
            <option value="v">Medecine</option>
            <option value="n">Chimie</option>
          </select>
        </div>
        <div class="week">
          <div class="question">
            <label>Days Attending </label>
            <div class="question-answer">
              <div>
                <input type="radio" value="none" id="radio_3" name="day"/>
                <label for="radio_3" class="radio"><span>Sunday</span></label>
              </div>
              <div>
                <input  type="radio" value="none" id="radio_4" name="day"/>
                <label for="radio_4" class="radio"><span>Monday</span></label>
              </div>
              <div>
                <input  type="radio" value="none" id="radio_5" name="day"/>
                <label for="radio_5" class="radio"><span>Tuesday</span></label>
              </div>
              <div>
                <input  type="radio" value="none" id="radio_6" name="day"/>
                <label for="radio_6" class="radio"><span>Wednesday</span></label>
              </div>
              <div>
                <input  type="radio" value="none" id="radio_7" name="day"/>
                <label for="radio_7" class="radio"><span>Thursday</span></label>
              </div>
              <div>
                <input  type="radio" value="none" id="radio_8" name="day"/>
                <label for="radio_8" class="radio"><span>Friday</span></label>
              </div>
              <div>
                <input  type="radio" value="none" id="radio_9" name="day"/>
                <label for="radio_9" class="radio"><span>Saturday</span></label>
              </div>
            </div>
          </div>
          <div class="question">
            <label>Activities Attending</label>
            <div class="question-answer">
              <div>
                <input type="radio" value="none" id="radio_10" name="activity"/>
                <label for="radio_10" class="radio"><span>CEO luncheon</span></label>
              </div>
              <div>
                <input  type="radio" value="none" id="radio_11" name="activity"/>
                <label for="radio_11" class="radio"><span>Finance seminar</span></label>
              </div>
              <div>
                <input  type="radio" value="none" id="radio_12" name="activity"/>
                <label for="radio_12" class="radio"><span>Leadership seminar</span></label>
              </div>
              <div>
                <input  type="radio" value="none" id="radio_13" name="activity"/>
                <label for="radio_13" class="radio"><span>Marketing workshop</span></label>
              </div>
              <div>
                <input  type="radio" value="none" id="radio_14" name="activity"/>
                <label for="radio_14" class="radio"><span>Teamwork seminar</span></label>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <label for="visit">Special Requirements</label>
          <textarea id="visit" rows="3"></textarea>
        </div>
        <div class="question">
          <label>Did you attend last years conference?</label>
          <div class="question-answer">
            <div>
              <input type="radio" value="none" id="radio_15" name="contact"/>
              <label for="radio_15" class="radio"><span>Yes</span></label>
            </div>
            <div>
              <input  type="radio" value="none" id="radio_16" name="contact"/>
              <label for="radio_16" class="radio"><span>No</span></label>
            </div>
          </div>
        </div>
        <div class="btn-block">
          <button type="submit" href="/">Submit</button>
        </div>
      </form>
    </div>
  
   );
    

}
export default Formulaire;
 
