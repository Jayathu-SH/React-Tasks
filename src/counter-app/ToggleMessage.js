import React, { useState } from 'react'

function ToggleMessage() {
    const[visible, setVisible]=useState(false);//visible=false

    const handleToggle=()=>setVisible(prev=>(!prev));

  return (


    <div>

      <button onClick={handleToggle}>
        {visible ? "Hide":"Show"}Message 
        {/* // default visible=false->show message */}
      </button>

      {visible && <p>This is the secret message</p>} 
      {/*after onclick visible-true then-> //visible=true && message */}
    </div>
  );
}

export default ToggleMessage
