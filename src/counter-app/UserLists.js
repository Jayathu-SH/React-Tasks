import React, { useEffect, useState } from 'react'

function UserLists() {
    const[users,setUsers]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
        .catch(err=>console.error('error fetching users:',err))
    },[])
  return (
    <div>
      <h2>Users:</h2>
      <ol>
        {users.map(user=>(
            <li key={user.id}>{user.name}</li>
        ))}
      </ol>
    </div>
  )
}

export default UserLists
