import React, { useState } from 'react'

function SearchFilter() {
    const[searchTerm, setSearchTerm]=useState('');

    const names=["Jaye","Sanka","Eveni","Doggy","Paddy"];

    const filteredNames=names.filter(name=>
        name.toLowerCase()//case insensitive
        .includes(searchTerm.toLowerCase())//"charlie".includes("ar") -> true
    );

    
  return (
    <div>
      <h2>Search Names</h2>
      <input
      type='text'
      value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)}
      placeholder='Type a name'
      />

      <ul>
        {filteredNames.map((name,index)=>(
            <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter
