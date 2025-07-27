import React, { useEffect, useState } from 'react'

function UserList() {
    const[users,setUsers]=useState([]);//[]-empty array

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])//[]-once,(component mount)
  return (
    <ul>
      {users.map(user=><li key={user.id}>{user.name}</li>)}
    </ul>
  )
}

export default UserList
