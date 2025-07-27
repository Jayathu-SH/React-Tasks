import React from 'react'
const fruits = ['Apple', 'Banana', 'Cherry'];

function FruitList() {
  return (
    <ol>
        {fruits.map((fruit,index)=>(
            <li key={index}>{fruit}</li>
        ))}
    </ol>
  )
}

export default FruitList
