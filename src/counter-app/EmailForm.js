import React, { useState } from 'react'

function EmailForm() {
    const[email, setEmail]=useState('');
    const[error, setError]=useState('');

    const validateEmail=(value)=>{
        if(!value.trim()) {//value.trim() → removes spaces from the start and end of the string.!value.trim()- input empty or only spaces
            return 'Email is required.';
        }else if (!value.includes('@')){
            return 'Invalid email format.';
        }
        return '';
    };



    const handleSubmit=(e)=>{
        e.preventDefault();//stops the page from reloading

        const validationError= validateEmail(email);
        if(validationError){
            setError(validationError);//Shows error if invalid
        } else {
            console.log('Email submitted:', email);
            setEmail('');
            setError('');
        }
    }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter Your Email</h2>
      <input
      type='text'
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      placeholder='Email'
      name='email'
      />
      {error && <p>{error}</p>}
      {/* //error has a value (is not empty or false), show a <p> element with the error message., error is empty, nothing is shown. */}

      <button type='submit'>Submit</button>
    </form>
  );
};

export default EmailForm;
