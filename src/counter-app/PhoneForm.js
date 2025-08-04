import React, { useState } from 'react'

function PhoneForm() {
    const[phone, setPhone]=useState('');
    const[error, setError]=useState('');

    const validatePhone=(value)=>{
        const cleaned = value.replace(/\D/g, '');//.replace(/\D/g, '')- regular expression remove everything except digits.
        if(!cleaned){// empty
            return "Phone number required";
        }
        else if(cleaned.length !== 10){
            return "Phone number must be 10 digits";
        }
        else{
            return "";// empty string-no error
        }
    };
    
    const handleChange=(e)=>{
        const {value}=e.target;
        setPhone(value);
        setError(validatePhone(value));
    }

    const handleSubmit=(e)=>{
        e.preventDefault(); //stop reloading
        const validationError=validatePhone(phone);
        if(validationError){
            setError(validationError);
        }else{
            alert(`Phone number submitted: ${phone}`);//${phone}-actual phone number
            setPhone('');
            setError('');
        }
    }


  return (
    <form onSubmit={handleSubmit}>
      <label>Phone Number:</label>
      <input
      type='text'
      value={phone}
      onChange={handleChange}
      placeholder='10-digit-number'
      />
      {error && <p>{error}</p>}
      <button type='submit'>Submit</button>
    </form>
  )
}

export default PhoneForm;
