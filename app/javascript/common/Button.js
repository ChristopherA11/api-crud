import React from 'react'

const Button = ({mobile,handelEdit}) => {
  return (
    <div>
        <button type='submit' onClick={() => handelEdit(mobile.id)}>submit</button>
    </div>
  )
}

export default Button