import React from 'react'

function WelcomeMessage({isLoggedIn}) {
  return (
    <div>
      {isLoggedIn ? <p>Welcome Back!</p> : <p>Please Log in.</p>}
    </div>
  )
}

export default WelcomeMessage
