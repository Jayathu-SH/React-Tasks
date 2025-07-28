import React, { useState } from 'react'

function SmartForm() {
    const[value, setValue]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('Submitted',value);
        setValue('');
    }

  return (

    <form onSubmit={handleSubmit}>
      <input
      type='text'
      value={value}
      onChange={(e)=> setValue(e.target.value)}
      placeholder='Enter text'
      />

      <button type='submit' disabled={value.trim()=== ''}>
        {/* //value.trim()=== '' - input is empty->disabled(true),button can't click */}
        Submit
      </button>

    </form>
  );
};

export default SmartForm
