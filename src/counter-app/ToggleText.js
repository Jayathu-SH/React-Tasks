import React, { useState } from 'react'

function ToggleText() {
    const[visible, setVisible]=useState(false);
  return (
    <div>
        <button onClick={()=>setVisible(!visible)}>
            {visible?"Hide":"Show"}
        </button>
      {visible && <p>This is the hidden text</p>}
    </div>
  )
}

export default ToggleText
