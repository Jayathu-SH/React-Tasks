import React, { useState } from 'react'

function RegistrationForm() {
    const[formData, setFormData]=useState({
        name:'',
        email:'',
        password:''
    });

    const[errors, setErrors]=useState({});

    const handleChange=({target:{name, value}})=>{
        setFormData(prev=>({
            ...prev,
            [name]:value//updates only the field that changed
        }));
    }

    const handleSubmit=(e)=>{
        e.preventDefault();//stop page reloading

        const validationErrors=validate();

        if(Object.keys(validationErrors).length===0){//checks if there are no validation errors in the form
            console.log("Form submitted",formData);
            setFormData({name:'',email:''});
            setErrors({});
        }else{
            setErrors(validationErrors);
        }
    }

    const validate=()=>{
        const newErrors={};

        if(!formData.name.trim()){
            newErrors.name="This field is required.";
        }

        if(!formData.email.trim()){
            newErrors.email="This field is required.";
        }else if(!formData.email.includes('@')){
            newErrors.email="Invalid email address."
        }
        return newErrors;
    }

    
  return (
    <form onSubmit={handleSubmit}>
        <h1>Register</h1>

    <div>
      <h2>Name:</h2>
      <input
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder='Name'
      />
      {errors.name && <p>{errors.name}</p>}
    </div>

    <div>
      <h2>Email:</h2>
      <input
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder='Email'
      />
      {errors.email && <p>{errors.email}</p>}
    </div>
    <button type='submit'>Submit</button>

    </form>
  );
};

export default RegistrationForm;
