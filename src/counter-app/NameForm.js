import React, { useState } from 'react'

function NameForm() {
    const[name, setName]=useState("");

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Submitted name:",name);
}

  return (
    <form onSubmit={handleSubmit}>
      <input
      type='text'
      value={name}
      onChange={(e)=>setName(e.target.value)}
      placeholder='Enter name'
      />
      <button type='submit'>submit</button>
    </form>
  );
};

export default NameForm
