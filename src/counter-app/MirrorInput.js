import React, { useState } from 'react'

function MirrorInput() {
    const[text, setText]=useState("");
  return (
    <div>
      <input
      type='text'
      value={text}
      placeholder='type...'
      onChange={(e)=>setText(e.target.value)}
      />
      <p>You tped:{text}</p>
    </div>
  )
}

export default MirrorInput
