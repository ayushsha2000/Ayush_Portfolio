import React from 'react'
import './Button.css'


const Button = (props) => {
  return (
    
      <button onClick={()=>{}}>
        <span className="button-text">{props.buttonText}</span>
        <span className="button-icon">
          {props.buttonIcon}
        </span>
      </button>
    
  )
}

export default Button
